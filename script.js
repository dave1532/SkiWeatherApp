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

// function clear(c) {
//   c.preventDefault();
//   var clickon = $('click');
//   fetchWeatherData(clickon);
// }

// $('.clear').on("click", clear);

function fetchWeatherData(selection) {
  $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?lat=' + locations[selection[0].value].lat + '&lon=' + locations[selection[0].value].long + '&units=imperial&appid=' + weatherAppId,
    method: "GET",
    success: function(data){
      var ourData = {
        weather: date.weather.main,
        Weather: date.weather.description,
        icon: data.img,
        temp: data.main.temp,
        wind: data.wind.speed,
      }

      var $div = $('<div />');
      $div.addClass('forecast');

      var $p = $('<p />');
      $p.addClass('main');
      $p.text(date.weather.main);
      $div.append($p);

      var $p = $('<p />');
      $p.addClass('description');
      $p.text(date.weather.description);
      $div.append($p)

      var $img = $('<img />');
      $img.addClass('icon');
      $img.attr('src', 'images/01d.png');
      $div.append($img);

      var $p = $('<p />');
      $p.addClass('temperature');
      $p.text(data.main.temp);
      $div.append($p);

      var $p = $('<p />');
      $p.addClass('wind');
      $p.text(data.wind.speed);
      $div.append($p);

      $(".container").append($div)
    }
  });
}
