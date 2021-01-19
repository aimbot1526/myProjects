const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', (req, res) => {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    res.send(`Your BMI is ${bmi}`);

    // if(bmi < 18.5) {
    //     res.end(`Your BMI is ${bmi}, so you're underweight.`);
    // } if (bmi >= 18.5 && bmi <= 24.9){
    //     res.end(`Your BMI is ${bmi}, so you've  normal weight`) 
    // } if(bmi > 24.9) {
    //     res.end(`Your BMI is ${bmi}, so you 're overweight.`);
    // }
    
    // res.end(bmi);
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});