const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
//設定路徑
const publicDirctoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//設定express摻數
app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//設定一個靜態目錄
app.use(express.static(publicDirctoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title: 'Weater App',
        name: 'Andy Mead'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Pet',
        name: 'Andy Mead'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        number: '0988237995',
        name: 'Andy Mead'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
            error:'Must provide an address!'
        })
    }else{
        geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
            if(error){
                return res.send({error})
            }
            //console.log('Data',data)
            /**
            longitude: 121.53953,
            latitude: 25.044743,
            location: 'Taipei, Taiwan' 
             */
            // forecast(-75.7088, 44.1545, (error, data) => {
            forecast(longitude,latitude, (error, forecastData) => {
                if(error){
                    return res.send({error})
                }
                res.send({
                    forecast:forecastData.weatherDescriptions,
                    location,
                    address:req.query.address
                    
                })
            })
        })
    }
    
})

app.get('/products',(req,res)=>{

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title: '404',
        name: 'Andy Mead',
        errorMsg:'Help article not found'
    })
})

app.get('*',(req,res) =>{
    res.render('404',{
        title: '404',
        name: 'Andy Mead',
        errorMsg:'Page not found'
    })
})


//設備連線監聽
app.listen(process.env.PORT || 3000,()=>{
    console.log('server is up on port 3000.')
})

//本機連線
// app.listen(3000, 'localhost', () => {
//     console.log('Server running on http://localhost:3000');
//   });
  