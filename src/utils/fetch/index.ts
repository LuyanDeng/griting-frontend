import { isEqual } from 'lodash-es'

/**
 * Parameters for fetchApi
 */
interface FetchParams {
  url: string
  method?: string
  params?: any
  equalKey?: string
  token?: string // JWT or session token from backend
}

type RequestParams = NonNullable<Parameters<typeof fetch>[1]>

/**
 * A cache to detect repeated results (used with `equalKey`)
 */
const equalMap = new Map<string, any>()

/**
 * Execute the actual fetch request
 */
async function executeRequest(url: string, requestParams: RequestParams) {
  const response = await fetch(url, requestParams)

  // If the response is not OK, throw an error
  if (!response.ok) {
    const message = await response.text().catch(() => response.statusText)
    throw new Error(`HTTP error ${response.status}: ${message}`)
  }

  return response.json()
}

/**
 * fetchApi can be used in two ways:
 * 1. Pass a function that returns a Promise (custom fetcher)
 * 2. Pass an object with url/method/params/token
 */
export function fetchApi<T = any>(
  fetcher: () => Promise<any>,
  equalKey?: string
): Promise<T>
export function fetchApi<T = any>(
  fetchParams: Omit<FetchParams, 'equalKey'>,
  equalKey?: string
): Promise<T>
export function fetchApi() {
  const param: FetchParams | (() => Promise<any>) = arguments[0]
  const equalKey: string = arguments[1]

  let fetcher: Promise<any>

  if (typeof param === 'function') {
    // Case 1: custom fetcher function
    fetcher = param()
  } else {
    // Case 2: build request from FetchParams
    const { url, method = 'GET', params, token } = param

    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    if (token) headers['Authorization'] = `Bearer ${token}`

    const requestParams: RequestParams = { method, headers }

    if (method !== 'GET' && params) {
      requestParams.body = JSON.stringify(params)
    }

    fetcher = executeRequest(url, requestParams)
  }

  // If fetcher is a Promise, handle equalKey deduplication
  return fetcher.then((result) => {
    if (typeof equalKey !== 'string') return result

    const lastResult = equalMap.get(equalKey)
    if (isEqual(lastResult, result)) {
      throw new Error('fetchApi: equal') // identical result, skip update
    } else {
      equalMap.set(equalKey, result)
      return result
    }
  })
}
