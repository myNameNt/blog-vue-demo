const TOKEN = 'token'

export default {
  getToken () {
    return JSON.parse(sessionStorage.getItem(TOKEN))
  },
  setToken (token) {
    sessionStorage.setItem(TOKEN, JSON.stringify(token))
  },
  removeToken () {
    sessionStorage.removeItem(TOKEN)
  }
}
