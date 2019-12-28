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



