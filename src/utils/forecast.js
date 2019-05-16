const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "https://api.darksky.net/forecast/b37bba76ff8a54932b4750b687a039fa/" +
        latitude +
        "," +
        longitude +
        "?units=si";

    request({
            url,
            json: true
        },
        (error, {body}) => {
            if (error) {
                callback("Unable to connect to weather service!", undefined);
            } else if (body.error) {
                callback('Unable to find location.', undefined);
            } else {
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The High today is ' + body.daily.data[0].temperatureHigh + ' with a Low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.');
            }
        }
    );
};

module.exports = forecast;