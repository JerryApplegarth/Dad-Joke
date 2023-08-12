// api key k1vXqADTLWdnbH65+EJj9Q==eElJTnIlb4mxWoCO
// api address: https://api.api-ninjas.com/v1/dadjokes?limit=1

const btn = document.querySelector('#btn');
const jokeEl = document.querySelector('#joke');
const apiKey = 'k1vXqADTLWdnbH65+EJj9Q==eElJTnIlb4mxWoCO';

btn.addEventListener('click', () => {
	getJoke();
	// call
});

// setting up variable for api and key
const options = {
	method: 'GET',
	headers: { 'X-Api-Key': apiKey },
};
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
// function to call api
async function getJoke() {
	// add a sleep function for api call
	jokeEl.innerHTML = 'Loading...';
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const response = fetch(apiURL, options)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data[0]['joke']);
			jokeEl.innerHTML = data[0]['joke'];
		});
}
