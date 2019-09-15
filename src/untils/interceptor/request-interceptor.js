import tokenStorage from '../../untils/token/token-storage'

export default {
  config (axios) {
    axios.interceptors.request.use(
      config => {
        config.baseUrl = `${process.env.FINANCE_BASE_URL}`
        config.withCredentials = true
        const token = tokenStorage.getToken()
        console.log(token)
        if (token) {
          config.headers.Authorization = `Bearer ${token.access_token}`
        }
        return Promise.resolve(config)
      },
      error => Promise.reject(error)
    )
  }
}
