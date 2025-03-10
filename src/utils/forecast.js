const request = require('request')

const forecast = ((longitude,latitude, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=b5bea56ca0c08d0227b5c2cf861b7149&query=${latitude},${longitude}&units=m` 
    request({ url, json:true },(error,{body}) =>{
        if(error){
            callback('Unabled to connect to weather services', undefined)
        }else if(body.error) {
            callback('Unabled to find location', undefined)
        }else{
            callback(undefined,{
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                weatherDescriptions: body.current.weather_descriptions
            })
        }
    })
})

module.exports = forecast