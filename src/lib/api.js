// The strateaura-backend service that handles the webinar and contact forms.
const BASE_URL = "https://strateaura-backend.vercel.app";

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
