import Page from './Page.js'

export default class ToDoPage extends Page {
	constructor(anchor) {
		super(anchor)
	}
	async onInit() {}
	render() {
		this.anchor.innerHTML = `<div class='todo-page'>
									<h1>Main page</h1>
									<a href="#" id="homelink">Login</a>
								</div>`
		this.anchor.querySelector("#homelink").addEventListener("click", (event) => {
			event.preventDefault()
			this.router.changeRoute("login")
		})
	}

}