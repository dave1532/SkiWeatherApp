var locations = {
  greenLake: {
    lat: 47.61,
    long: -122.33,
  },
  discovery:{
    lat: 47.661976,
    long: -122.435705,
  },
  carkeek:{
    lat: 47.640139,
    long: -122.293780,
  },
  interlaken:{
    lat: 47.642062,
    long: -122.317115,
  },
 lincolnPark:{
    lat: 47.531497,
    long: -122.392876,
  }
}

function go(e) {
  e.preventDefault();
  var selection = $('option:selected');
  fetchWeatherData(selection);
}

$('.formSubmit').on("click", go);

function fetchWeatherData(selection) {
  $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?lat=' + locations[selection[0].value].lat + '&lon=' + locations[selection[0].value].long + '&units=imperial&appid=' + weatherAppId,
    method: "GET",
    success: function(data){
      var ourData = {
        temp: data.main.temp,
        windSpeed: data.wind.speed,

      }
      var $cast = $('<div class="forecast">' + data.main.temp + '</div>')

      $(".container").append($cast)
    }
  });
}
