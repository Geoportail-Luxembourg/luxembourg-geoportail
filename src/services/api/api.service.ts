const CREDENTIALS_ORIGIN = import.meta.env.VITE_CREDENTIALS_ORIGIN

export async function fetchApi(
  url: string,
  payload: Record<string, string> | string | URLSearchParams,
  method: 'POST' | 'GET' | 'PUT' = 'GET',
  contentType = 'application/x-www-form-urlencoded'
) {
  const body = new URLSearchParams(payload)
  const headers = { 'Content-Type': contentType }
  const response = await fetch(url, {
    method,
    credentials: CREDENTIALS_ORIGIN,
    headers,
    body,
  })

  if (!response.ok) {
    throw new Error('Error while trying to call api')
  }

  return response
}
