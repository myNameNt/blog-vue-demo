import * as types from './mutations-type'
import tokenStorage from '../../../untils/token/token-storage'

export default {
  [types.SET_TOKEN] (state, token = 'nietingzuishuai') {
    tokenStorage.setToken(token)
  }
}
