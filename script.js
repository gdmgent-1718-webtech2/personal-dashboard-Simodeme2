// API WEATHER

var weatherCard = document.getElementById('weather');
var newsCard = document.getElementById('news');
var mapsCard = document.getElementById('maps');
var ytCard = document.getElementById('youtube');
var quoteCard = document.getElementById('quote');

var url = " https://api.openweathermap.org/data/2.5/weather?q=Gent," +
          "country=be&" +
          "units=metric&" +
          "appId=508aae88e3901da75c3785bf130dc82f";
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var tempStr = ''; 
      tempStr += `
      <h2>${data.name}</h2>
      <p>Temperatuur: ${data.main.temp} °C</p>
      <p>Wind: ${data.wind.speed} km/h</p>
      `;
      weatherCard.innerHTML += tempStr;
      console.log(data); 
    })

var url = " https://api.openweathermap.org/data/2.5/weather?q=Gullegem," +
          "country=be&" +
          "units=metric&" +
          "appId=508aae88e3901da75c3785bf130dc82f";
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var tempStr = ''; 
      tempStr += `
      <h2>${data.name}</h2>
      <p>Temperatuur: ${data.main.temp} °C</p>
      <p>Wind: ${data.wind.speed} km/h</p>`;
      weatherCard.innerHTML += tempStr;
    })

// API NEWS

var newsCard = document.getElementById('news');
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7a98af960c22435782ca43686fabfc2b';

var req = new Request(url);
fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    for(var i = 0; i < 5; i++) {
      var tempStr = '';
      tempStr += `
      <h4>${data.articles[i].title}</h4>
      <p>${data.articles[i].description}</p>
      `;
      newsCard.innerHTML += tempStr;
    }
  })

// API GOOGLE MAPS

  function initMap() {
    var uluru = {lat: 51.0906669, lng: 3.6872046};
    var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  // API YOUTUBE

var url = 'https://www.googleapis.com/youtube/v3/search?q=&part=snippet&maxResults=5&' +
          'key=AIzaSyBQka9-kFXQpHSEhn8lR3vgWc9vWwIlhFI';

var req = new Request(url);
    fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    for(var i = 0; i < data.items.length; i++) {
        var tempStr = '';
        tempStr += `
            <div class="video"><h4>${data.items[i].snippet.title}</h4>
            <img src="${data.items[i].snippet.thumbnails.high.url}"></div>
            `;
            ytCard.innerHTML += tempStr;
    }
})

// API QUOTE OF THE DAY

var url = 'http://quotes.rest/qod.json';

var req = new Request(url);
    fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var tempStr = '';
        for(var i = 0; i < data.contents.quotes.length; i++) {
            tempStr += `
            <h4>${data.contents.quotes[i].title}</h4>
            <p>${data.contents.quotes[i].quote}</p>
            `;
            console.log(data);
            quoteCard.innerHTML += tempStr;
        }
        
    })
