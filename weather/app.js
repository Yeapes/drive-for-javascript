const condition = document.getElementById('condition')
const city = document.getElementById('city')
const country = document.getElementById('country')
const mainText = document.getElementById('main')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')

const cityInput = document.getElementById('city-input')
const historyElm = document.getElementById('history')
const masterHistory = document.getElementById('master-history')

const API_KEY = '5d3f820e6b95c0c49938e0ae2adf3f98'
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
const ICON_URL = 'https://openweathermap.org/img/w/'
const DEFAULT_CITY  = 'Dhaka,bd'

window.onload = function(){
     navigator.geolocation.getCurrentPosition(s => {
        //   getWeatherData(null,s.coords)
         getWeatherData(null, s.coords)
     },e => {
         getWeatherData()
     })
}

//get weather data from api call
function getWeatherData(city = DEFAULT_CITY, coords){
    let url = BASE_URL

    city === null ?
    url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` :
    url = `${url}&q=${city}`
    axios.get(url)
      .then(response => {
        console.log(response.data)
      })
      .catch(e =>{

      })
}