import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo">Velox</div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="landing-main">
        <h1>AI-Powered Code Review</h1>
        <p>Automated PR reviews that catch bugs before they reach production</p>

        <div className="cta-buttons">
          <Link to="/dashboard" className="btn-primary">Get Started</Link>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Instant Reviews</h3>
            <p>AI analyzes your PRs in seconds</p>
          </div>
          <div className="feature">
            <h3>Bug Detection</h3>
            <p>Catch issues before they ship</p>
          </div>
          <div className="feature">
            <h3>Free Tier</h3>
            <p>5 free reviews per month</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing