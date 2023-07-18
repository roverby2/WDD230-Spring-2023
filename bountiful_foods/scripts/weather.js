const apiKey = '4def50accbd787e425567d862bd5108f';

const weatherCard = document.querySelector('.weather-card');

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=${apiKey}&units=imperial`;
const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=${apiKey}&units=imperial`;

const temperature = weatherCard.querySelector('.temperature');
const description = weatherCard.querySelector('.description');
const humidity = weatherCard.querySelector('.humidity');
const weatherIcon = weatherCard.querySelector('.weather-icon');
const forecastDays = weatherCard.querySelectorAll('.forecast-day');
const forecastTemperatures = weatherCard.querySelectorAll('.forecast-temperature');
const forecastIcons = weatherCard.querySelectorAll('.forecast-icon');


async function fetchWeatherData() {
  try {
    const [currentWeatherResponse, forecastWeatherResponse] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastWeatherUrl)
    ]);

    const currentWeatherData = await currentWeatherResponse.json();
    const forecastWeatherData = await forecastWeatherResponse.json();

    displayWeatherData(currentWeatherData, forecastWeatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeatherData(currentWeatherData, forecastWeatherData) {
  // Process and display the current weather data
  const currentTemperature = currentWeatherData.main.temp.toFixed(0);
  const currentDescription = currentWeatherData.weather[0].description;
  const currentHumidity = currentWeatherData.main.humidity;
  const currentWeatherIcon = `http://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`;

  temperature.textContent = `${currentTemperature}ºF`;
  description.textContent = currentDescription;
  humidity.textContent = `Humidity: ${currentHumidity}%`;
  weatherIcon.style.backgroundImage = `url(${currentWeatherIcon})`;

  // Process and display the forecast weather data
  const forecastByDate = {};

  forecastWeatherData.list.forEach(forecast => {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    if (!forecastByDate[date]) {
      forecastByDate[date] = [];
    }
    forecastByDate[date].push(forecast);
  });

  const dailyForecasts = Object.values(forecastByDate).slice(1, 4);

  for (let i = 0; i < dailyForecasts.length; i++) {
    const maxTempForecast = dailyForecasts[i].reduce((maxTemp, forecast) => {
      return forecast.main.temp > maxTemp.main.temp ? forecast : maxTemp;
    });
  
    const forecastTemperature = maxTempForecast.main.temp.toFixed(0);
    const forecastDate = new Date(maxTempForecast.dt * 1000);
    const forecastIconUrl = `http://openweathermap.org/img/w/${maxTempForecast.weather[0].icon}.png`;
  
    forecastDays[i].textContent = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
    forecastTemperatures[i].textContent = `${forecastTemperature}ºF`;
    forecastIcons[i].style.backgroundImage = `url(${forecastIconUrl})`;
  }  
}


fetchWeatherData();