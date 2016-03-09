$.ajax({
  url:"http://api.openweathermap.org/data/2.5/weather?lat=47.61&lon=-122.33&units=imperial&appid=" + weatherAppId,
  method: "GET",
  success: function(data){
    var ourData = {
      temp: data.main.temp,
      windSpeed: data.wind.speed,
      main: data.main,
      weather: data.weather.description,
    }

    var $cast = $('<div id="forecast">' + data.main + '</div>')

    $(".container").append($cast)


  }
});
// $("#Green",".BtnSub").on('click', function(){
//   console.log($.on());
// }
// function On($.ajax) {
