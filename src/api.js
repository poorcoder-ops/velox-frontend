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
  const res = await fetch(`${API_BASE}/api/reviews`, {
    credentials: 'include'
  });
  return res.json();
}

export async function healthCheck() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}

export async function getCurrentUser() {
  const res = await fetch(`${API_BASE}/api/auth/me`, {
    credentials: 'include'
  });
  return res.json();
}

export async function logout() {
  const res = await fetch(`${API_BASE}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  });
  return res.json();
}

export function loginWithGithub() {
  window.location.href = `${API_BASE}/api/auth/github`;
}