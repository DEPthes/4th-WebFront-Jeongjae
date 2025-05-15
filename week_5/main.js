function getWeather() {
  const $city = document.getElementById('city-input').value.trim();
  const apiKey = '27ce3f78cc7abaf4f912ac1555c239db';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${$city}&appid=${apiKey}&units=metric&lang=kr`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error('도시를 찾을 수 없습니다');
      return res.json();
    })
    .then((data) => {
      const $weatherBox = document.getElementById('weather-box');
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;

      $weatherBox.innerHTML = `
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <p>오늘의 날씨는: ${description}</p>
        <p>오늘의 기온은: ${temp}°C</p>
        <p>오늘의 습도는: ${humidity}%</p>
      `;
    })
    .catch((err) => {
      const $weatherBox = document.getElementById('weather-box');
      $weatherBox.innerHTML = `<p>${err.message}</p>`;
    });
}
