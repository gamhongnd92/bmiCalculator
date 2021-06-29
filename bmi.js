const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

var bmiResult = "";
app.get('/', function(req, res) {
    res.render('bmi');

});

app.post('/', function(req, res) {
    var age = parseInt(req.body.age);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    bmiResult = parseFloat(weight / ((height / 100) * (height / 100))).toFixed(2);

    // res.send("The result is " + bmiResult);
    res.render('bmi', { result: bmiResult });

});



app.listen(3000, function() {
    console.log("Server is running on port 3000");
})