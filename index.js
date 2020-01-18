//stripe stuff. Saved in the express server so no one can see it in the DOM
//const stripe = require('stripe')('pk_test_D6FhaJCLuADq8OkVFKhiHk2x00pVC5dEQW');
const stripe = require('stripe')('sk_test_BBxY1KRFcbhUpQObXz0Myk6300CfguWSH7');
//const path = require('path') //...not sure if I need the path file at this moment (20:00 on a Wednesday night 01/15/2020)


//express server stuff
const express = require('express')
const app = express()

app.use(express.static("./www"));
var port = process.env.PORT || 5000;


if(port == null) {
	console.error("No 'PORT' variable was found in the environment.");
	process.exit();
}



app.listen(port, () => console.log("Example app listening on port " + port));


app.get('/test', function(req, res){
	response = "some stuff was entered";
	console.log(response);
});

app.use('/nest', (req, res, next) => {
	console.log(process.env);
	next();
});


// app.post("/charge", (req, res) => {
// 	try {
// 		stripe.customers.create({
// 			name: req.body.name,
// 			email: req.body.email,
// 			source: req.body.stripeToken
// 		}).then(customer => stripe.charges.create({
// 			amount: req.body.amount * 100,
// 			currenct: 'usd',
// 			customer: customer.id
// 		})
// 		).then(() => res.render("completed.html")).catch(err => console.log(err));
// 	} catch (err) {
// 		res.send(err);
// 	}
// });



// const stripe = require('stripe')('sk_test_BBxY1KRFcbhUpQObXz0Myk6300CfguWSH7');

// (async () => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       name: 'T-shirt',
//       description: 'Comfortable cotton t-shirt',
//       images: ['https://example.com/t-shirt.png'],
//       amount: 500,
//       currency: 'usd',
//       quantity: 1,
//     }],
//     success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
//     cancel_url: 'https://example.com/cancel',
//   });
// })();


