let searching = document.getElementById("cityname");
processApi("Hyderabad");

// function apicall(event) {
//     let cityname = searching.value;
//     processApi(cityname);
//     event.preventDefault();
// }
const formsubmit = document.getElementById("formsubmit");
formsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let cityname = searching.value;
    processApi(cityname);
})
let displaycity = document.getElementById("citykanaam");
displaycity.innerHTML = "Hyderabad";

function processApi(cityname) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityname;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a607ea20fbmshc2697e0e3eeae7dp1843bajsn56e27d1b284a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            cloud_pct.innerHTML = data.cloud_pct;
            cloud_pct1.innerHTML = data.cloud_pct;
            humidity.innerHTML = data.humidity;
            feels_like.innerHTML = data.feels_like;
            max_temp.innerHTML = data.max_temp;
            min_temp.innerHTML = data.min_temp;
            sunrise.innerHTML = data.sunrise;
            sunset.innerHTML = data.sunset;
            sunrise1.innerHTML = data.sunrise;
            sunset1.innerHTML = data.sunset;
            temp.innerHTML = data.temp;
            wind_degrees.innerHTML = data.wind_degrees;
            wind_speed.innerHTML = data.wind_speed;
            wind_speed1.innerHTML = data.wind_speed;
        });
    searching.value = "";
    console.log(cityname, "Nithya");
    let displaycity = document.getElementById("citykanaam");
    displaycity.innerHTML = cityname;
}