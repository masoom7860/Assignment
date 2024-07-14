async function fetchWeatherData() {
    const city = document.getElementById('cityWeather').value
    console.log(city);
    // const city = "Pune"
    const apiKey = 'e8fb93eff607c73eff67bfb1b3b45e53'


    try {

        const weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        console.log(weatherUrl);

        if (!weatherUrl.ok) {
            throw new Error("City Not Found")
            // console.log("City Not Found");
        }
        const data = await weatherUrl.json()
        displayWeatherData(data)
        console.log(data);
        // console.log(data.main.temp);
        // console.log(data.name);
        // console.log(data.wind.speed);
        // console.log(data.main.humidity);
        // console.log(data.visibility);

    } catch (err) {
        displayError(err.message);
    }
}

function displayWeatherData(data) {
    const weatherData = document.querySelector('.weatherData');
    const temperature = data.main.temp;
    console.log(temperature);
    const description = data.weather[0].description;
    console.log(description);
    const humidity = data.main.humidity;


    weatherData.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
        <p>Humidity: ${humidity}</p>

    `;
}

function displayError(message) {
    const weatherData = document.querySelector('.weatherData');
    weatherData.innerHTML = `<p style="color: red;">${message}</p>`
}

