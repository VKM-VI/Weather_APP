
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15cea079b3msh2ef5ca7c53130f0p156ce3jsn9574db0dd898',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function fun(city){
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
    .then(response => response.json())
    .then(response =>{
        console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct;
        feels_like.innerHTML=response.feels_like + `<small >°C </small>`
        humidity.innerHTML=response.humidity + `<small class="text-body-secondary fw-light"> % </small>`
        max_temp.innerHTML=response.max_temp + `<small >°C </small>`
        min_temp.innerHTML=response.min_temp + `<small >°C </small>`
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        temp.innerHTML=response.temp + `<small class="text-body-secondary fw-light">°C </small>`
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
     
})
.catch(err=> console.log(err));
}
let i=0;
const getWeather = (city)=>{
    if (typeof city === 'string' || city instanceof String){
        fun(city);
    }
    else{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city.innerHTML,options)
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            // cloud_pct.innerHTML = response.cloud_pct;
            document.getElementsByClassName("2")[i].innerHTML=response.feels_like + `<small >°C </small>`
            document.getElementsByClassName("3")[i].innerHTML=response.humidity + `<small class="text-body-secondary fw-light"> % </small>`
            document.getElementsByClassName("4")[i].innerHTML=response.max_temp + `<small >°C </small>`
            document.getElementsByClassName("5")[i].innerHTML=response.min_temp + `<small >°C </small>`
            document.getElementsByClassName("6")[i].innerHTML=response.sunrise
            document.getElementsByClassName("7")[i].innerHTML=response.sunset
            document.getElementsByClassName("8")[i].innerHTML=response.temp + `<small class="text-body-secondary fw-light">°C </small>`
            document.getElementsByClassName("9")[i].innerHTML=response.wind_degrees
            document.getElementsByClassName("10")[i].innerHTML=response.wind_speed
            i++;
         
    })
    .catch(err=> console.log(err));
    }
}
getWeather("Delhi");    
submit.addEventListener("click",(e)=>{
    e.preventDefault(); //Stop page from reload while searching 
    getWeather(text.value);
})

//  getWeather(document.getElementById("Newyork"));
//  getWeather(document.getElementById("Dubai"));
//  getWeather(document.getElementById("Lucknow"));
//  getWeather(document.getElementById("Kolkata")); 

let ci=["Newyork","Dubai","Lucknow","Kolkata"]
ci.forEach(function(elemenent){
    getWeather(document.getElementById(elemenent))
})  


// console.log(document.getElementById("Newyork"));
// let a=[]
// for(let i=0;i<5;i++){
//     getWeather(document.getElementById("New York"))
// }


// let dd= document.getElementsByClassName("1")
// console.log(dd[].innerHTML="hi");
