const request = require('request')

const geocode = (address, callback) =>{
    const accessToken = 'pk.eyJ1IjoibWluLWxpdSIsImEiOiJjbTd3d2ozdTAwOXcyMmtvcTlmNG1rN2Z6In0.5Xlnz0N_wkA3rhOnmeVB3w';
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(address)}&access_token=${accessToken}&limit=1`;
    request({ url, json:true},(error,{body})=>{
        if(error){
            callback('Unabled to connect to location services', undefined)
        }
        else if(body.features.length === 0){
            callback('Unabled to find location. Try another search', undefined)
        }else{
            callback(undefined,{
                longitude: body.features[0].properties.coordinates.longitude,
                latitude: body.features[0].properties.coordinates.latitude,
                location: body.features[0].properties.place_formatted
            })
        }
    })
}

module.exports = geocode