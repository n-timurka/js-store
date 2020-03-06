import router from "../router.js"

export default class Page {
	constructor(anchor) {
		this.anchor = anchor
		this.router = router
	}
	onInit() {}
}