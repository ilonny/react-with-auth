import { RSAA } from 'redux-api-middleware'
import ls from 'local-storage'

export default store => next => action => {
    console.log('middleware here?')
    const callApi = action[RSAA]
    // Check if this action is a redux-api-middleware action.
    if (callApi) {
    // Inject the Authorization header from localStorage.
      callApi.headers = Object.assign({}, callApi.headers, {
        Authorization: JSON.parse(localStorage.getItem('user')).password
      })
    }
    // Pass the FSA to the next action.
    return next(action)
  }