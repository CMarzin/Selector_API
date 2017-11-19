import ApiClient from '../client'

export default {
  get: () => {
    const requestPath = 'https://jsonplaceholder.typicode.com'
    const requestParams = {}

    return ApiClient.request(requestPath, requestParams)
  }
}
