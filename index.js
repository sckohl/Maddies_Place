
if (process.env.NODE_ENV !=='production')
{
	const dotenv=require('dotenv');
	dotenv.config();
}

const stripeSecretPublicKey = process.env.STRIPE_TEST_SECRET_KEY
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



const stripe = require('stripe')(stripeSecretPublicKey);




app.post('/payment', async function (req,res){

	const Token =req.body.Token;
	const Description = req.body.Description
	// console.log(Token);
	//console.log(payments.payments[0].price);
	const PersonName = req.body.InputName;
	// console.log(req.body.InputName +': First InputName console log');

	// console.log(req.body.Amount)

		stripe.charges.create({
			amount: req.body.Amount,
		//amount: payments.payments[0].price,
		currency: 'usd',
		description: Description,
		source: Token,
		receipt_email: req.body.InputEmail,
		metadata: {
			CustomerName : req.body.InputName,
			CustomerEmail: req.body.InputEmail,
			CustomerDescription: req.body.Description,
			PaymentAmount: req.body.Amount,
			MaddiesPlace_EIN: '82-4916091',
		},
		// customer: customer.id
		}
		// )
		).then(charge =>res.send(charge)).catch(err => {
			console.log("error: ", err);
			res.status(500).send({error: "Purchase Failed"})
		})

	res.sendfile('./www/completed.html')
	
});

