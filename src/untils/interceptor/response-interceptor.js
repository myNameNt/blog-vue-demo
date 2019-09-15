
export default {
  config (axios, store, router) {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              store.dispatch('logout')
              router.replace({
                path: '/login',
                query: { redirect: router.currentRoute.fullPath }
              })
              break
            case 403:
              router.replace({path: '/error/forbidden'})
              break
            case 404:
              router.replace({ path: '/error/not-found' })
              break
            case 500:
              router.replace({ path: '/error/service-error' })
              break
          }
        } else {
          router.replace({path: '/error/not-fount'})
        }
        return Promise.reject(error)
      }
    )
  }
}
