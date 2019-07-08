const	express = require('express'),
  		fs = require('fs'),
		app = express()

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.get("/hello", (req, res)=>{
  res.status(200).send('Hello World');
})

app.get("/soap/:service/:command", (req, res)=>{

	console.log(req.params.service, req.params.command)
	res.status(200).send('soap');
})

const web_port = process.env.PORT || 8415;

app.listen(web_port, () => {
 console.log("Listening on " + web_port);
})