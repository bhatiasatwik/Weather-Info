const apikey='5001d5cdf706e69d0d084658d4d4931c'
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function checkWeather()
{
    const input_box=document.querySelector('.input-box');
    const city=input_box.value;
    const response =await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=city.toUpperCase();//city name

    document.querySelector('.temp').innerHTML=`${Math.round(data.main.feels_like)}°C`;//temp

    document.querySelector('.wind').innerHTML=`${Math.round(data.wind.speed)} mph`;//temp 
    
    document.querySelector('.humidity').innerHTML=`${Math.round(data.main.humidity)}%`;//temp 
    
    const weather_icon=document.querySelector('.big-img');
    const condition=data.weather[0].main;
    console.log(condition);
    if(condition==='Clouds')
    {
        weather_icon.src="weather-app-img/images/clouds.png"
    }
    if(condition==='Clear')
    {
        weather_icon.src="weather-app-img/images/clear.png"
    }
    if(condition==='Rain')
    {
        weather_icon.src="weather-app-img/images/rain.png"
    }
    if(condition==='Drizzle')
    {
        weather_icon.src="weather-app-img/images/drizzle.png"
    }
    if(condition==='Mist')
    {
        weather_icon.src="weather-app-img/images/mist.png"
    }
    document.querySelector('.weather').style.display="block";
}

