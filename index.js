
if (process.env.NODE_ENV !=='production')
{
	const dotenv=require('dotenv');
	dotenv.config();
}

const stripePublicKey = process.env.STRIPE_TEST_SECRET_KEY
const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser())
payments = require('./donations.json');


//EXPRESS SERVER SETUP CODE:
app.use(express.static("./www"));
var port = process.env.PORT || 5000;

if(port == null) {
	console.error("No 'PORT' variable was found in the environment.");
	process.exit();
}

app.listen(port, () => console.log("Example app listening on port " + port));
//END EXPRESS SERVER SETUP


//stripe stuff. Saved in the express server so no one can see it in the DOM
//const stripe = require('stripe')('pk_test_D6FhaJCLuADq8OkVFKhiHk2x00pVC5dEQW');
const stripe = require('stripe')(stripePublicKey);
//const path = require('path') //...not sure if I need the path file at this moment (20:00 on a Wednesday night 01/15/2020)




app.post('/payment', async function (req,res){
	const Token =req.body.Token;
	const Description = req.body.Description
	console.log(Token);
	//console.log(payments.payments[0].price);
	const PersonName = req.body.InputName;
	console.log(req.body.InputName +': First InputName console log');
	//console.log(payments);
	//console.log(Description)
	console.log(req.body.Amount)
	// stripe.customers.create({
	// 	email: req.body.InputEmail,
	// 	name: req.body.InputName
	// }).then(
	// customer => 
		stripe.charges.create({
			amount: req.body.Amount,
		//amount: payments.payments[0].price,
		currency: 'usd',
		description: Description,
		source: Token,
		// customer: customer.id
		}
		// )
		).then(charge =>res.send(charge)).catch(err => {
			console.log("error: ", err);
			res.status(500).send({error: "Purchase Failed"})
		})

	res.sendfile('./www/completed.html')
	
});

