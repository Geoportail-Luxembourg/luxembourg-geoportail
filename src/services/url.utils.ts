export function getQRUrl(shortUrl: string | undefined) {
  return shortUrl && `${import.meta.env.VITE_QR_URL}?url=${shortUrl}`
}

export function getMymapsPath(resource: string) {
  if (resource) {
    if (resource.startsWith('data:image')) {
      return resource
    }
    if (
      resource.startsWith('/') &&
      import.meta.env.VITE_V3_API_HOST.endsWith('/')
    ) {
      resource = '.' + resource
    }

    return `${import.meta.env.VITE_V3_API_HOST}${resource}`
  }
  return undefined
}
