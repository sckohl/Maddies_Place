app.post("/charge", (req, res) => {
	try {
		stripe.customers.create({
			name: req.body.name,
			email: req.body.email,
			source: req.body.stripeToken
		}).then(customer => stripe.charges.create({
			amount: req.body.amount * 100,
			currenct: 'usd',
			customer: customer.id
		})
		).then(() => res.render("completed.html")).catch(err => console.log(err));
	} catch (err) {
		res.send(err);
	}
});


function testAlert()
{
    confirm("Does this work now?")
}





var stripe = require('stripe')('pk_test_D6FhaJCLuADq8OkVFKhiHk2x00pVC5dEQW');

const post = event.onCall(async() =>{
	console.log('started Async function')
  const charge = await stripe.charges.create({
    amount: 1000,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',	
});
console.log('FINISHED Async function call')
})();


function push(post,res){
    return post
}







function testpmt(token, res) {
    //ALERT('staring stipetokenhandler function')
   if (document.getElementById('termsbox').checked == true)
      {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    //ALERT('almost done')
    form.appendChild(hiddenInput);
    // Submit the form
    //alert("submitting form")
    form.submit()
    ;
    res.render("completed.html").catch(err => console.log(err));
      }
  else {alert('you must agree to the terms of service and payments of $4.00 per month for each sensor you register')}
  }















var style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: "#32325d",
    }
  };
  // Create an instance of the card Element.
  var card = elements.create('card', {style: style});
  // Add an instance of the card Element into the `card-element` <div>.
  card.mount('#card-element');
  card.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });
  // Create a token or display an error when the form is submitted.
  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Inform the customer that there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server.
        stripeTokenHandler(result.token);
      }
    });
  });
  function stripeTokenHandler(token, res) {
    ALERT('staring stipetokenhandler function')
   if (document.getElementById('termsbox').checked == true)
      {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    ALERT('almost done')
    form.appendChild(hiddenInput);
    // Submit the form
    alert("submitting form")
    form.submit()
    ;
    res.render("completed.html").catch(err => console.log(err));
      }
  else {alert('you must agree to the terms of service and payments of $4.00 per month for each sensor you register')}
  }





