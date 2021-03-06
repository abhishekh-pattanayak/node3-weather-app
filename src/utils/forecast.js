const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6950698a338d9a5b7a1059b8157bc006&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&units=m`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.success===false) {
            callback("Unable to find location!")
        } else {
            const desc = body.current.weather_descriptions[0]
            let resultString = desc + ". It is currently " + body.current.temperature + " degrees out. But it feels like " + body.current.feelslike + " degrees."
            resultString = resultString + "The humidity is " + body.current.humidity + "% and the wind speed is " + body.current.wind_speed + " km/hr."
            callback(undefined, resultString)
        }
    })
}

module.exports = forecast 