// Base URL of the strateaura-backend service. Set VITE_API_BASE_URL in .env
// (and in the host's environment settings for production builds); the fallback
// is the backend's local dev port.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

/**
 * POSTs JSON and normalises the backend's error shapes into one thrown Error:
 * `{ error }` for general failures, `{ errors: { field: msg } }` for validation.
 */
export async function postJson(path, body) {
  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Could not reach the server. Please check your connection and try again.");
  }

  let data = {};
  try {
    data = await response.json();
  } catch {
    // Non-JSON response (proxy error page, gateway timeout, ...)
  }

  if (!response.ok || !data.success) {
    throw new Error(
      data.error ||
        Object.values(data.errors || {})[0] ||
        "Something went wrong. Please try again."
    );
  }

  return data;
}
