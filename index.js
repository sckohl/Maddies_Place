const express = require('express')
const app = express()

app.use(express.static("./www"));
var port = process.env.PORT || 5000;

if(port == null) {
	console.error("No 'PORT' variable was found in the environment.");
	process.exit();
}



app.listen(port, () => console.log("Example app listening on port " + port));


app.get('/', function(req, res){
	response = "some stuff was entered";
	console.log(response);
});



// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

const stripe = require('stripe')('sk_test_ZtyEjBcAgk6Y3EEA9VaNVveX00Zf9QQwxk');

// In a new endpoint on your server, create a ConnectionToken and return the
// `secret` to your app. The SDK needs the `secret` to connect to a reader.
stripe.terminal.connectionTokens.create();



// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys


// const stripe = require('stripe')('sk_test_ZtyEjBcAgk6Y3EEA9VaNVveX00Zf9QQwxk');

// (async () => {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1099,
//     currency: 'usd',
//   });
// })();

// // Set up Stripe.js and Elements to use in checkout form
// var style = {
// 	base: {
// 	  color: "#32325d",
// 	}
//   };
  
//   var card = elements.create("card", { style: style });
//   card.mount("#card-element");



//   card.addEventListener('change', ({error}) => {
// 	const displayError = document.getElementById('card-errors');
// 	if (error) {
// 	  displayError.textContent = error.message;
// 	} else {
// 	  displayError.textContent = '';
// 	}
//   });

