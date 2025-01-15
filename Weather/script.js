const cityInput = document.querySelector('.city-input');

const searchBtn = document.querySelector('.search-btn');

const notFoundSection = document.querySelector('.not-found');

const searchCitySection = document.querySelector('.search-city');

const weatherInfoSection = document.querySelector('.weather-info');

const countryTxt = document.querySelector('.country-txt');

const tempTxt = document.querySelector('.temp-txt');

const conditionTxt = document.querySelector('.condition-txt');

const humidityValue = document.querySelector('.humidity-value-txt');

const forecastItemsContainer = document.querySelector('.forecast-items-container');

const windValueTxt = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summary-img')

const currentDataTxt = document.querySelector('.current-data-txt')






//butona clik olayı verdik şehir isminde boşluk yoksa bu değeri gerekli fonksiyona gönderiyoruz ve click olayından sonra inputu temizleyip focus olayını kaldırdık

searchBtn.addEventListener('click', () => {
  if (cityInput.value.trim() !== '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
});


//burda klavyeye basma olayını kontrol ediyoruz enter tuşuna basarsak input değerini tutuyoruz daha sonra inputu temizleyip focus olayını kaldırıyoruz
cityInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && cityInput.value.trim() !== '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
});



// burda openweather dan verileri çekiyoruz
async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP Hatası: ${response.status}`);
  }

  return response.json();
}

// hava durumu apı sine göre iconları belirliyoruz
function getWeatherIcon(id) {
  if (id <= 232) return 'thunderstorm.svg'; //thunderstorm
  if (id <= 321) return 'drizzle.svg'; // drizzle
  if (id <= 531) return 'rain.svg';//rain
  if (id <= 622) return 'snow.svg'; //snow
  if (id <= 781) return 'atmosphere.svg';  // atmosphere
  if (id <= 800) return 'clear.svg'; //clear

  else return 'cloudy.svg';

}


//bu fonskiyonda günümüz tarihini alıp belirli bir formata çeviriyoruz
function getCurrentDate() {
  const currentDate = new Date(); //bilgisayarın o günkü saatini baz alır
  const options = {   //tarih bilgisini istediğimiz formaya dönüştürüyoruz
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  };
  return currentDate.toLocaleDateString('en-GB', options); // ingiltere formatına göre belirleniyor
}

// hava durumu bilgisini apı den alır
async function updateWeatherInfo(city) {
  const weatherData = await getFetchData('weather', city);


  if (weatherData.cod !== 200) { //200 başarılı bir sonuç demektir 200 değilse not found ekranını görüntüler
    showDisplaySection(notFoundSection);
    return
  }
  console.log(weatherData);

  const { // apıden aldığımız verileri ayrıştırıyoruz
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed }

  } = weatherData;


  countryTxt.textContent = country;// apı den alıp ayrıştırdığımız verileri HTML de text kısmına yazıyoruz ***************ÖNEMLİ
  tempTxt.textContent = Math.round(temp) + ' ℃';
  conditionTxt.textContent = main;
  humidityValue.textContent = humidity + ' %';
  windValueTxt.textContent = speed + ' M/s';

  currentDataTxt.textContent = getCurrentDate();
  weatherSummaryImg.src = `./assets/${getWeatherIcon(id)}`;


  await updateForecastsInfo(city);

  showDisplaySection(weatherInfoSection);

}


//apı den hava taminini çekmek için kullandığımız fonksiyon
async function updateForecastsInfo(city) {
  const forecastsData = await getFetchData('forecast', city);


  const timeTaken = '12:00:00'; //filtreleme yapmak için kullandığımız saat dilimi
  const todayDate = new Date().toISOString().split('T')[0]; //şuanki tarih ile karşılaştırma yapar
  forecastItemsContainer.innerHTML = ''; //hava durumu tahminiyle ilgili HTML bölümünü temizler her seferinde

  forecastsData.list.forEach(forecastWeather => {  //her bir veri karşılaştırılır
    if (forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate)) {
      updateForecastsItems(forecastWeather);
    }

  });

  console.log(todayDate); // debugging için eklendi


}
// hava tahmini verilerini alır ve HTML bloğuna işler
function updateForecastsItems(weatherData) {
  console.log(weatherData); //debugging için eklendi
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp }
  } = weatherData;

  const dateTaken = new Date(date);
  const dateOption = {
    day: '2-digit',
    month: 'short'
  };
  const dateResult = dateTaken.toLocaleDateString('en-US', dateOption);

  const forecastItem = `
      <div class="forecast-item">
          <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
          <img src="assets/${getWeatherIcon(id)}" alt="storm-cloud" class="forecast-item-img">
          <h5 class="forecast-item-temp">${Math.round(temp)}</h5>
      </div>
  `;

  forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem);
}



function showDisplaySection(section) {

  [weatherInfoSection, searchCitySection, notFoundSection]

    .forEach(section => section.style.display = 'none');


  section.style.display = 'flex';
}