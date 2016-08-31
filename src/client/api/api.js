import axios from 'axios'

export function addContact(data) {
	return axios.post("http://formspree.io/heartlandjazzartsgroup@gmail.com", data).then(function(resp){
		console.log(resp)
	})
}

export function addToMailingList(data) {
	return axios.post("http://0.0.0.0/mailsignup/" + data).then(function(resp){
		console.log(resp)
	})
}
