// const app = new Vue({
// 	el: "#app",
// 	data: {
// 		message: "Hello Vue!",
// 	},
// });

const app = Vue.createApp({
	// template: "<h1>Hello {{firstname}} world!</h1>",
	data() {
		return {
			firstname: "John",
			lastname: "Doe",
			email: "john@gmail.com",
			picture: "/img/stiles.jpg ",
			gender: "male",
		};
	},
	methods: {
		async getUser() {
			const res = await fetch("https://randomuser.me/api");
			const { results } = await res.json();
			this.firstname = results[0].name.first;
			this.lastname = results[0].name.last;
			this.email = results[0].email;
			this.gender = results[0].gender;
			this.picture = results[0].picture.large;
		},
	},
});

app.mount("#app");
