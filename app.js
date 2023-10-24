var fetchdata =  position =>{
    var {latitudes , longitudes}   = position , coords;
if(navigator.geolocation.position){
    navigator.geolocation.getCurrentPosition(position);
    var latitudes = "latitudes";
    var longitudes = "longitudes";
    console.log(position);
}






fetch ('https://api.openweathermap.org/data/2.5/weather?q=santo domingo&lang=es&units=metric&appid=fa2e3c48eec3ba1a664043b2789f2fe1')

 
 .then(Resp => { return Resp.json()})
 .then(data => setweatherdata(data))
}

var setweatherdata = data => {
    console.log(data)

    var weatherdata = {
        location: data.name,
        description: data.weather[0].description,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp_max,
        clouds: data.clouds.all,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
       
        
 
       
    }
    
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key];
    });


 

   
}


var times = "1698057360"*1000;
console.log(times);


var time = "1698099139"*1000;
console.log(time);


var fecha = new Date(times);
console.log(fecha);

var fechas = new Date(time);
console.log(fechas);


var onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchdata);
}


