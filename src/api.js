const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function joinWaitlist(email) {
  const res = await fetch(`${API_BASE}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return res.json();
}

export async function getWaitlistPosition(email) {
  const res = await fetch(`${API_BASE}/api/waitlist/position/${email}`);
  return res.json();
}

export async function getReviews() {
  const res = await fetch(`${API_BASE}/api/reviews`);
  return res.json();
}

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}