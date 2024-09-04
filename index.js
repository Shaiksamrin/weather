var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="1c63f0bc1ee8e7725aa62a8bfb0b2d78"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
   
    fetch(' https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var windspeed = data['wind']['speed']


        city.innerHTML='weather of<span> ${nameval} <span>'
        temp.innerHTML = 'Temperature: <span>${ convertion(temperature)}C</span>' 
        description.innerHTML = 'Sky Conditions: <span>${descrip}<span>'
        wind.innerHTML = 'wind speed: <span>${windspeed} km/h<span>'

    })

    .catch(err => alert('you entered wrong city name'))
})