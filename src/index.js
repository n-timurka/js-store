import router from './router.js'

class Main {
	constructor(anchor) {
		this.anchor = anchor
		document.addEventListener("change-route", () => this.render())
		router.setActiveRoute(window.location.pathname)
		this.render()
	}
	async render() {
		const activeRoute = router.getActiveRoute()
		history.pushState({}, activeRoute.name, activeRoute.url)
		const activePage = new activeRoute.component(this.anchor)
		await activePage.onInit()
		activePage.render()
	}
}

new Main(document.querySelector("#app"))
