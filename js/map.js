function initMap(isRussia) {
  const mapContainer = document.getElementById('map');
  mapContainer.innerHTML = ''; // Очистка контейнера перед добавлением карты

  if (isRussia) {
      // Код для Яндекс-карт
      const yandexMap = `<iframe src="https://yandex.ru/map-widget/v1/-/CCUeZcTn" width="600" height="450" frameborder="1" allowfullscreen="true"></iframe>`;
      mapContainer.innerHTML = yandexMap;
  } else {
      // Код для Google-карт
      const googleMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10000!2d30.0!3d50.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JvQu9C10YDQvtC70L7QstCw0YLRgNC-0L7Qu9C10YDQvtC70L7QstCw0YLRgNC-0L7Qu9C10YDQvtC70L7QstCw0YLRgNC-0L7Qu9DqA&output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
      mapContainer.innerHTML = googleMap;
  }
}

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
  } else {
      alert("Геолокация не поддерживается вашим браузером.");
  }
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Используем API обратного геокодирования для определения страны
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`)
      .then(response => response.json())
      .then(data => {
          const country = data.countryName;
          initMap(country === 'Россия');
      })
      .catch(() => {
          initMap(false); // Если не удалось определить страну, показываем Google-карту
      });
}

function error() {
  alert("Не удалось получить ваше местоположение.");
  initMap(false); // Если ошибка, показываем Google-карту
}

getLocation();