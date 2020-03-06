import LoginPage from './pages/LoginPage.js'
import HomePage from './pages/HomePage.js'

export default {
	routes: [
		{
			name: 'login',
			url: '/login',
			component: LoginPage
		},
		{
			name: 'home',
			url: '/',
			component: HomePage
		},
	],
	activeRoute: localStorage.getItem("token") ? "home" : "login",
	getActiveRoute() {
		return this.routes.find(item => item.name === this.activeRoute)
	},
	setActiveRoute(path) {
		const activeRoute = this.routes.find(item => item.url === path)
		this.activeRoute = activeRoute.name || 'home'
	},
	changeRoute(routeName) {
		const route = this.routes.find(item => item.name === routeName)
		if(!route) {
			return
		}
		history.pushState({}, route.name, route.url)
		this.activeRoute = routeName
		document.dispatchEvent(new Event("change-route"))
	},
}