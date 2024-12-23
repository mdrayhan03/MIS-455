function searchData() {
    country = document.getElementById("country").value ;
    url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url)
    .then(response => response.json())
    .then(data => showData(data[0])) ;
}

var parent = document.getElementsByClassName("output")[0] ;

function showData(data) {
    console.log(data) ;
    parent.classList.add("card") ;
    parent.classList.add("m-3") ;
    parent.classList.add("p-3") ;
    parent.classList.add("info") ;
    
    var rowDiv = document.createElement("div") ;
    rowDiv.classList.add("row") ;
    parent.appendChild(rowDiv) ;

    var imgDiv = document.createElement("div") ;
    imgDiv.classList.add("col-md-6") ;
    imgDiv.classList.add("col-12") ;
    imgDiv.classList.add("p-3") ;

    var img = document.createElement("img") ;
    img.src = data.flags.png ;
    img.style.width = "100%" ;

    imgDiv.appendChild(img) ;

    var infoDiv = document.createElement("div") ;
    infoDiv.classList.add("col-md-6") ;
    infoDiv.classList.add("col-12") ;
    infoDiv.classList.add("p-3") ;

    infoDiv.innerHTML = `<h3>${data.name.official}</h3><p>Common: ${data.name.common}</p><p>Capital: ${data.capital}</p><p>Region: ${data.region}</p><p>Subregion: ${data.subregion}</p><p>Axis: ${data.latlng}</p><p>Area: ${data.area} km<sup>2</sup></p><p>Population: ${data.population}</p><a href='${data.maps.googleMaps}' target='blank'>Google Map</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='${data.maps.openStreetMaps}' target='blank'>Open Street Map</a>` ;

    rowDiv.appendChild(imgDiv) ;
    rowDiv.appendChild(infoDiv) ;

    var weatherDiv = document.createElement("div") ;
    weatherDiv.classList.add("weatherDiv") ;
    weatherDiv.style.maxHeight = "0px" ;
    parent.appendChild(weatherDiv) ;
    weatherData() ;

    var buttonDiv = document.createElement("div") ;
    buttonDiv.classList.add("buttonDiv") ;
    buttonDiv.innerHTML = `<button onclick="weatherFunction()">Weather Info</button>` ;
    parent.appendChild(buttonDiv) ;
}

function weatherData() {
    country = document.getElementById("country").value ;
    key = `d161cc6fc1cc49be9b534950240812` ;
    url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${country}&aqi=no` ;
    fetch(url)
    .then(response => response.json())
    .then(data => showWeatherData(data)) ;
}

function showWeatherData(data) {
    console.log(data) ;
    var weatherDiv = document.getElementsByClassName("weatherDiv")[0] ;

    weatherDiv.innerHTML = `<div><h3>Location</h3><p>TZ_ID: ${data.location.tz_id}</p><p>Epoch: ${data.location.localtime_epoch}</p><p>Localtime: ${data.location.localtime}</p></div><div><h3>Current</h3><p>Update Epoch: ${data.current.last_updated_epoch}</p><p>Update Localtime: ${data.current.last_updated}</p><p>Temperature: ${data.current.temp_c}C/ ${data.current.temp_f}F</p><p>Wind Speed: ${data.current.wind_mph}mph/ ${data.current.wind_kph}kph</p></div>` ;

}

var click = false ;

function weatherFunction() {
    var weatherDiv = document.getElementsByClassName("weatherDiv")[0] ;

    if (click === false) {
        weatherDiv.style.maxHeight = "500px" ;
        click = true ;
    }
    else if (click === true) {
        weatherDiv.style.maxHeight = "0px" ;
        click = false ;
    }
}