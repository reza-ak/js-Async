const weather = new Weather('تهران', 'تهران');

weather.changeLocation('شیراز', 'فارس')

function getWeather() {
  weather.getWeather().then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err.message);
  })
}

document.addEventListener('DOMContentLoaded', getWeather);