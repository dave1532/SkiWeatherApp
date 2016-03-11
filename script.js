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
//----------------------- buttons go and rest--------------
function go(e) {
  e.preventDefault();
  var selection = $('option:selected');
  fetchWeatherData(selection);
}
$('.formSubmit').on("click", go);

function clear(e) {
  e.preventDefault();
  $('.forecast').remove();
}
$('.clear').on("click", clear);
//----------------------- buttons go and rest--------------

function fetchWeatherData(selection) {
  $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?lat=' + locations[selection[0].value].lat + '&lon=' + locations[selection[0].value].long + '&units=imperial&appid=' + weatherAppId,
    method: "GET",
    success: function(data) {

      var $div = $('<div />');
      var $main = $('<p />');
      var $img = $('<img />');
      var $description = $('<p />');
      var $temp = $('<p />');
      var $wind = $('<p />');

      var ourData = {

        weather: data.weather.main,
        Weather: data.weather.description,
        icon: data.img,
        temp: data.main.temp,
        wind: data.wind.speed,
      }

      $div.addClass('forecast');

      $main.addClass('main');
      $main.text(data.weather[0].main);
      $div.append($main);

      $description.addClass('description');
      $description.text(data.weather[0].description);
      $div.append($description)

      $img.addClass('icon');
      $img.attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
      $div.append($img);

      $temp.addClass('temperature');
      $temp.text(data.main.temp);
      $div.append($temp);

      $wind.addClass('wind');
      $wind.text(data.wind.speed);
      $div.append($wind);

      $(".container").append($div)
    }
  });
}
