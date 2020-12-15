let apiKey = "05bd22fc37c53d0b90b077b1aa4f078e";
let searchBtn = $(".searchBtn");
let cityValue = $(".cityValue");
let searchInput = $(".searchInput");
let searchHistoryEl = []

let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weatherIconEl = $(".weatherIcon")
let tempEl = $(".temp");
let feelLike = $(".feel")
let humidityEl = $(".humidity");
let windSpeedEl = $(".windSpeed");
let uvIndexEl = $(".uvIndex");

var today = new Date();
let day = String(today.getDate()).padStart("", '0');
let month = String(today.getMonth() + 1).padStart("", '0');
let yyyy = today.getFullYear();

var today = month + '/' + day + '/' + yyyy;


searchBtn.on("click", function (e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    console.log(searchInput)
    weatherData(searchInput.val());

    //stores all Searched Cities - Persistent data
    localStorage.setItem("Interested city: ", searchInput.val());
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
                cityFeel: weatherData.main.feels_like,
                cityHumidity: weatherData.main.humidity,
                cityWindSpeed: weatherData.wind.speed,
            }
            renderWeatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityFeel, cityObj.cityHumidity, cityObj.cityWindSpeed)
        })

};

function renderWeatherData(cityName, cityTemp, cityFeel, cityHumidity, cityWindSpeed) {
    cityNameEl.text(cityName)
    currentDateEl.text(`Today is: ${today}`)
    tempEl.text(`Temperature: ${cityTemp} °C`);
    feelLike.text(`Temperature feels like: ${cityFeel} °C`);
    humidityEl.text(`Humidity: ${cityHumidity}%`);
    windSpeedEl.text(`Wind Speed: ${cityWindSpeed} MPH`);
}