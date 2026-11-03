const BASE_URL = "https://openweathermap.org/payload/api/media/file/";
const API_KEY = "b08f9115cfaa240cd5bc5836451f4f53";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitute;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather div");
        const city = document.querySelector("#weather span");
        weather.innerHTML = `<span>${parseInt(data.main.temp)}℃</span><img src="${BASE_URL}${data.weather[0].icon}.png">`;
        console.log(`img src="${BASE_URL}${data.weather[0].icon}.png`);
        city.innerHTML = `${data.name}, `;

    });
}
function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// open weather api
