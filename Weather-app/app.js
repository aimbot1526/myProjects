const https = require('https');
const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=9b36cbf4c576a9ed018e6b5f2d4d708f";

    https.get(url, (response) => {
        console.log(res.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = Math.floor(weatherData.main.temp);
            const wheatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
            res.write(`<h1>The temperature in delhi is ${temp} Kelvin.</h1>`); 
            res.write("<img src="+imageUrl+">");
            res.write(`<h2>The Weather condition currently is ${wheatherDescription} in Delhi.</h2>`)
            res.send();
        });
    });
});

app.listen(8080, (res, req) => {
    console.log("Serever Started");
});
