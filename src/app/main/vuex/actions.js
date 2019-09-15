import * as types from './mutations-type.js'
// import authService from '../server/login'

export default {
  login ({ commit }, user) {
    // return authService.login(user).then(token => {
    //   commit(types.SET_TOKEN, token)
    // })
    commit(types.SET_TOKEN, {})
  }
}
