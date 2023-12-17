var apikey= "f0bdddc5c9f9a17fd91d753a132cb25d"
var apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var inputserch= document.querySelector('.inputserch')
var serchbtn=document.querySelector('.btn')
var weatherIcon=document.querySelector('.weather-icon')





async function checkwether(city) {
const response = await fetch(apiurl + city + `&appid=${apikey}`)

if (response.status==404) {
    document.querySelector('.errormsg').style.display='block'
    document.querySelector('.main').style.display='none'
}

var data = await response.json();
console.log(data)

document.querySelector('.city').innerHTML=data.name
document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+ '°C'
document.querySelector('.humanity').innerHTML=data.main.humidity+'%'
document.querySelector('.wind').innerHTML=data.wind.speed+ ' km/h'


if (data.weather[0].main == "Haze") {
    weatherIcon.src="images/drizzle.png"
}


else if(data.weather[0].main == "Clouds"){
      
    weatherIcon.src="images/clouds.png"
}


else if(data.weather[0].main == "Haze"){
      
      weatherIcon.src="images/snow.png"
  }

  else if(data.weather[0].main == "Clear"){
      
      weatherIcon.src="images/clear.png"
  }
  

  else if(data.weather[0].main == "Rain"){
      
      weatherIcon.src="images/rain.png"
  }
  
  else if(data.weather[0].main == "Sunny"){
      
      weatherIcon.src="images/mist.png"
  }

  
}




serchbtn.addEventListener("click", ()=>{
checkwether(inputserch.value);

document.querySelector('.main').style.display='block'
})

