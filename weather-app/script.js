const apiKey = '20128b96c5b47d07f0e2dd8110108302';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore';

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
}

checkWeather();
