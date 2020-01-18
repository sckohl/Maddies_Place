
// 			  function fetchConnectionToken() {
//   // Your backend should call /v1/terminal/connection_tokens and return the JSON response from Stripe
// console.log('started connection token function')
//   return fetch('localhost:5000/connection_token', { method: "POST" })
//     .then(response => response.json())
// 	.then(data => data.secret);
// 	console.log('FINISHED connection token function')
	
// }
function alert2(){
    confirm("Did this work?")
}

function test(){
	return   console.log('tested') ;
};

var stripe = require('stripe')('pk_test_D6FhaJCLuADq8OkVFKhiHk2x00pVC5dEQW');

(async() =>{
	console.log('started Async function')
  const charge = await stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',	
});
console.log('FINISHED Async function call')
})();


// function a(){
// 	console.log('button clicked');
// 	charge;
// 	};
