const express = require('express');  
const app = express();  
const bodyParser = require('body-parser'); 
const port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

app.get('/', (req, res) => {
   res.send('Hello World!')
 })
 
app.post('/process_post', urlencodedParser, function (req, res) {  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })