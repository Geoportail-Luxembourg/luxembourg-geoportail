const CREDENTIALS_ORIGIN = import.meta.env.VITE_CREDENTIALS_ORIGIN

/**
 * Call backend (fetch method) with specified credentials (in .env).
 *
 * @param url The url to fetch
 * @param payload The content to send (payload if POST, params if GET)
 * @param method The fetch method: 'POST' | 'GET' | 'PUT' (default is 'GET')
 * @param contentType The content type, if none, will be 'application/x-www-form-urlencoded',
 * if sending file, don't specify contentType
 */
export async function fetchApi(
  url: string,
  payload: Record<string, any> | string | URLSearchParams | FormData,
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' = 'GET',
  contentType?: string // eg. 'application/x-www-form-urlencoded'
) {
  const headers: Record<string, string> = {}
  const options: RequestInit = {
    method,
    credentials: CREDENTIALS_ORIGIN,
    headers,
  }
  let endpoint = url

  if (method === 'GET') {
    const params = new URLSearchParams(
      payload as Record<string, string> | string | URLSearchParams
    )
    endpoint = `${url}?${params.toString()}`
  } else if (payload instanceof FormData) {
    options.body = payload
  } else {
    if (contentType === 'application/json') {
      headers['Content-Type'] = 'application/json'
      options.body = JSON.stringify(payload)
    } else {
      headers['Content-Type'] =
        'application/x-www-form-urlencoded;charset=UTF-8'
      options.body = new URLSearchParams(payload as Record<string, string>)
    }
  }

  const response = await fetch(endpoint, options)

  if (!response.ok) {
    throw new Error('Error while trying to call api')
  }

  return response
}
