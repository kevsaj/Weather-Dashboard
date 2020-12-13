let apiKey = "05bd22fc37c53d0b90b077b1aa4f078e";
let searchBtn = $(".searchBtn");
let yo = $(".yo");
let searchInput = $(".searchInput");
let searchHistory = [];

let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $(".weatherIcon")
let tempEl = $(".temp");
let humidityEl = $(".humidity");
let windSpeedEl = $(".windSpeed");
let uvIndexEl = $(".uvIndex");

var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;


searchBtn.on("click", function (e) {
    e.preventDefault();

    let citySearchValue = searchInput.val();
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchValue}&APPID=${apiKey}&units=imperial`;
    $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function (weatherData) {
            console.log(weatherData);
            let cityObj = {
                cityName: weatherData.name,
                cityTemp: weatherData.main.temp,
                cityHumidity: weatherData.main.humidity,
                cityWindSpeed: weatherData.wind.speed
            }
            renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed)
        });
});

function cityValue() {
    var x = document.getElementById("myBtn").value;
    console.log(x);
}

yo.on("click", function (e) {
    e.preventDefault();

    let cityValue = x;
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&APPID=${apiKey}&units=imperial`;
    $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function (weatherData) {
            console.log(weatherData);
            let cityObj = {
                cityName: weatherData.name,
                cityTemp: weatherData.main.temp,
                cityHumidity: weatherData.main.humidity,
                cityWindSpeed: weatherData.wind.speed
            }
            renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed)
        });
});

