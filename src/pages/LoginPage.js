import Page from './Page.js'

export default class LoginPage extends Page {
	constructor(anchor) {
		super(anchor)
	}
	render() {
		this.anchor.innerHTML = `<div class='login-page'>
									<a href="#" id="homelink">Home</a>
									<form class="card" id="login-form">
										<h3>Login</h3>
										<div class='panel'>
											<p id="error" class='error'></p>
										</div>
									</form>
								</div>`
		this.anchor.querySelector("#homelink").addEventListener("click", (event) => {
			event.preventDefault()
			this.router.changeRoute("home")
		})
		this.anchor.querySelector("#login-form").addEventListener("submit", async (event) => {
			event.preventDefault()
			try {
				await this.store.dispatch("login", {
					"email": this.anchor.querySelector("#login-email").value,
					"password": this.anchor.querySelector("#password").value
				})
				this.router.changeRoute("home")
			} catch(error) {
				this.anchor.querySelector("#error").innerText = error.message
			}
		})
	}
}