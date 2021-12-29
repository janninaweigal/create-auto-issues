class Router {
  constructor() {
    this.routers = {}
    this.currenthash = ''

    this.refreshRoute = this.refreshRoute.bind(this)

    window.addEventListener('load', this.updateRoute.bind(this), false)

    window.addEventListener('hashchange', this.updateRoute.bind(this), false)
  }
  refreshRoute(path, cb) {
    this.routers[path] = cb || function () { }
  }

  updateRoute() {
    // # 123
    this.currenthash = location.hash.slice(1) || '/'
    this.refreshRoute(this.currenthash)
    this.routers[this.currenthash]()
  }

}