
const express=require('express') //ett ramverk som heter Express behövs
const app= express() // skapa en webb app med Express

// Gå in på localhost:3000
app.get('/', function(req, res) { // fråga efter första sidan
	console.log('laddar första sidan')
	res.send('Hello World')
})

// Gå in på localhost:3000/cats
// Om någon frågar efter första sidan så hämtar vi den
app.get('/cats', function(req, res) { // fråga efter/hämta första sidan, req=request, res=respond
	console.log('laddar cats sidan')
	res.send('Hello cats')
})

// Lyssna på port 3000
app.listen(3000, function(){
	console.log('Example app listening on port 3000')
})