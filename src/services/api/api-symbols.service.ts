import { fetchApi } from './api.service'

export const SYMBOLS_URL = import.meta.env.VITE_SYMBOLS_URL
export const SYMBOL_ICONS_URL = import.meta.env.VITE_SYMBOL_ICONS_URL
export const SYMBOL_UPLOAD_URL = import.meta.env.VITE_SYMBOL_UPLOAD_URL

export type Symbol = {
  id: number
  name: string
  url: string
  symboltype: 'public' | 'private'
}

interface SymbolJsonResponse {
  count: number
  results: Symbol[]
  sucess: boolean
}

let cachePublicSymbols: SymbolJsonResponse | undefined = undefined
let cachePrivateSymbols: SymbolJsonResponse | undefined = undefined

/**
 * Call api to retrieve list of public symbols
 * @param forceRefresh Ignore cache and call api, false by default
 */
export async function fetchPublicSymbols(forceRefresh = false) {
  if (!cachePublicSymbols?.results || forceRefresh) {
    const payload = { symboltype: 'public' }
    const response = await fetchApi(SYMBOLS_URL, payload, 'GET')

    cachePublicSymbols = await response.json()
  }

  return cachePublicSymbols?.results
}

/**
 * Call api to retrieve list of private symbols
 * @param forceRefresh Ignore cache and call api, false by default
 */
export async function fetchPrivateSymbols(forceRefresh = false) {
  if (!cachePrivateSymbols?.results || forceRefresh) {
    const payload = { symboltype: 'us' }
    const response = await fetchApi(SYMBOLS_URL, payload, 'GET')

    cachePrivateSymbols = await response.json()
  }

  return cachePrivateSymbols?.results
}

export async function uploadSymbol(file: File) {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetchApi(SYMBOL_UPLOAD_URL, formData, 'POST')

  return response
}

export function clearCache() {
  cachePublicSymbols = undefined
  cachePrivateSymbols = undefined
}
