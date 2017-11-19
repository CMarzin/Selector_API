import exampleAPI from '@/api/services'
import store from '@/store'

export function fetchExample () {
  // here I add the information to the store
  return exampleAPI.get('/post/1')
  .then(response => {
    console.log('response in example', response)
    store.dispatch('callApi', response)
  })
}
