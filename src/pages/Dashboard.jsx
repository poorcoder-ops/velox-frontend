import { useState, useEffect } from 'react'
import { getReviews, healthCheck } from '../api'

function Dashboard() {
  const [status, setStatus] = useState({ api: 'checking', backend: 'checking' })
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkStatus() {
      try {
        const health = await healthCheck()
        setStatus(s => ({ ...s, backend: health.status === 'ok' ? 'connected' : 'error' }))
      } catch {
        setStatus(s => ({ ...s, backend: 'disconnected' }))
      }
      setStatus(s => ({ ...s, api: 'connected' }))
    }

    async function loadReviews() {
      try {
        const data = await getReviews()
        setReviews(data.reviews || [])
      } catch (e) {
        console.error('Failed to load reviews:', e)
      }
      setLoading(false)
    }

    checkStatus()
    loadReviews()
  }, [])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">Velox</div>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

      <main className="dashboard-main">
        <h1>Dashboard</h1>

        <div className="status-cards">
          <div className="status-card">
            <h3>Backend</h3>
            <p className={`status ${status.backend}`}>
              {status.backend === 'checking' ? 'Checking...' : status.backend}
            </p>
          </div>
          <div className="status-card">
            <h3>Database</h3>
            <p className={`status ${status.backend === 'connected' ? 'connected' : 'disconnected'}`}>
              {status.backend === 'connected' ? 'Connected' : 'Disconnected'}
            </p>
          </div>
          <div className="status-card">
            <h3>AI Provider</h3>
            <p className="status connected">Groq (Free)</p>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Recent Reviews</h2>

          {loading ? (
            <p>Loading...</p>
          ) : reviews.length === 0 ? (
            <div className="empty-state">
              <p>No reviews yet. Install the GitHub App and open a PR to get started.</p>
            </div>
          ) : (
            <div className="reviews-list">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <span className={`status-badge ${review.status}`}>{review.status}</span>
                    <span className="review-repo">{review.repository}</span>
                  </div>
                  <div className="review-meta">
                    PR #{review.pull_request_number}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="setup-section">
          <h2>Setup Instructions</h2>
          <ol>
            <li>Go to GitHub Settings → Apps → velox-ai-review</li>
            <li>Install the app on your repositories</li>
            <li>Open a pull request to trigger your first review</li>
          </ol>
        </div>
      </main>
    </div>
  )
}

export default Dashboard