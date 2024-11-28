const CREDENTIALS_ORIGIN = import.meta.env.VITE_CREDENTIALS_ORIGIN

export async function fetchApi(
  url: string,
  payload: Record<string, string> | string | URLSearchParams,
  method: 'POST' | 'GET' | 'PUT' = 'GET',
  contentType = 'application/x-www-form-urlencoded'
) {
  const headers = { 'Content-Type': contentType }
  const options: RequestInit = {
    method,
    credentials: CREDENTIALS_ORIGIN,
    headers,
  }
  let endpoint = url

  if (method === 'GET') {
    const params = new URLSearchParams(payload)
    endpoint = `${url}?${params.toString()}`
  } else {
    options.body = new URLSearchParams(payload)
  }

  const response = await fetch(endpoint, options)

  if (!response.ok) {
    throw new Error('Error while trying to call api')
  }

  return response
}
