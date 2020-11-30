const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;



////path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");



//view engine
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

//static path
app.use(express.static(static_path));


/////routing
app.get("/", (req,res)=> {
	//res.send("welcome to main page")
	res.render('index')
})

app.get("/weather", (req,res)=> {
	//res.send("welcome to weather page")
	res.render('weather')
})

app.get("/about", (req,res)=> {
	//res.send("welcome to about page")
	res.render('about')
})

app.get("*", (req,res)=> {
	res.render('error',{
		errorMsg: 'Page you are looking is not found'
	})
})

app.listen(port,()=>{
	console.log(`listening to the port at ${port}`)
}) 