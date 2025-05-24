function getWeather() {
  // 입력창에서 사용자 입력(도시 이름)을 가져오고, 앞뒤 공백을 제거
  const $city = document.getElementById('city-input').value.trim();

  // OpenWeatherMap API에서 사용할 본인의 API 키
  const apiKey = '27ce3f78cc7abaf4f912ac1555c239db';

  // 사용자 입력과 API 키를 조합하여 날씨 정보 요청용 URL 생성
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${$city}&appid=${apiKey}&units=metric&lang=kr`;

  // URL로 GET 요청을 보내 날씨 데이터를 가져옴
  fetch(url) //비동기 함수 바로 값 반환x
    .then((res) => {
      //응답 객체, 요청이 성공했을 때 실행되는 콜백 함수.
      // 응답이 실패일 경우(예: 도시를 못 찾음) 에러를 발생시켜 catch로 보냄
      if (!res.ok) throw new Error('도시를 찾을 수 없습니다');
      // 응답이 성공이면 JSON 형식으로 변환
      return res.json();
    })
    .then((data) => {
      // 여기서 data는 이미 JSON 형태로 변환된 날씨 정보
      // 날씨 정보를 보여줄 HTML 요소(id가 weather-box)를 선택해서 $weatherBox라는 변수에 저장
      const $weatherBox = document.getElementById('weather-box'); // 날씨 아이콘 코드 추출 (예: 01d, 03n 등)
      const icon = data.weather[0].icon; //data.weather는 배열이며, 그 안의 첫 번째 요소 [0]에 날씨 정보가 들어있다.
      const description = data.weather[0].description; // 날씨 설명(예: 흐림, 맑음 등)을 가져옴
      const temp = data.main.temp; // 현재 기온 정보 추출 (섭씨 기준)

      const humidity = data.main.humidity; // 현재 습도 정보 추출 (% 단위)

      // 위 정보를 HTML 형식으로 만들어 weather-box에 출력, HTML 형태로 조합해서 weather-box 요소 안에 표시
      $weatherBox.innerHTML = `  
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
        <p>오늘의 날씨는: ${description}</p>
        <p>오늘의 기온은: ${temp}°C</p>
        <p>오늘의 습도는: ${humidity}%</p>
      `;
    })
    .catch((err) => {
      const $weatherBox = document.getElementById('weather-box'); // 오류 발생 시에도 weather-box 요소를 다시 가져옴
      $weatherBox.innerHTML = `<p>${err.message}</p>`; // 에러 메시지를 화면에 출력
    });
}
