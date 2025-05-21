function refreshWeather ( response )
{
    let temperatureElement = document.querySelector( "#temperature" );
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector( "#city" );
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    
    
}

function searchCity (city)
{
    let apiKey = "o982c70t8fd77d21494ee6b5d8a8355b";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}";
    axios.get( apiUrl ).then( refreshWeather );
}


function handleSearchSubmit (event)
{
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");


    searchCity(searchInput.value);
}


let searchFormElement = document.querySelector( "#search-form" );
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchCity( "New York" );