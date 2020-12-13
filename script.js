let apiKey = "05bd22fc37c53d0b90b077b1aa4f078e";
let searchBtn = $(".searchBtn");
let cityValue = $(".cityValue");
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
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    console.log(searchInput)
    weatherData(searchInput.val());
});

$(document).on("click", ".cityValue", function () {
    console.log("clicked cityValue item")
    let thisElement = $(this);
    weatherData(thisElement.text());
})

function weatherData(cityValue) {
    console.log(cityValue);
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&APPID=${apiKey}&units=imperial`;
    $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function (weatherData) {
            let cityObj = {
                cityName: weatherData.name,
                cityTemp: weatherData.main.temp,
                cityHumidity: weatherData.main.humidity,
                cityWindSpeed: weatherData.wind.speed,
                cityUVIndex: weatherData.coord,
                cityWeatherIconName: weatherData.weather[0].icon
            }
            renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityHumidity, cityObj.cityWindSpeed)
        })

};

function renderWeatherData(cityName, cityTemp, cityHumidity, cityWindSpeed, cityWeatherIcon, uvVal) {
    cityNameEl.text(cityName)
    currentDateEl.text(`(${today})`)
    tempEl.text(`Temperature: ${cityTemp} °F`);
    humidityEl.text(`Humidity: ${cityHumidity}%`);
    windSpeedEl.text(`Wind Speed: ${cityWindSpeed} MPH`);
    uvIndexEl.text(`UV Index: ${uvVal}`);
    weatherIconEl.attr("src", cityWeatherIcon);
}