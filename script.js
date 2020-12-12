let apiKey = "05bd22fc37c53d0b90b077b1aa4f078e";
let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");



searchBtn.on("click", function (e) {
    e.preventDefault();
    if (searchInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    
    getWeather(searchInput.val());
});