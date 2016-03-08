$.ajax({
  url:'http://api.openweathermap.org/data/2.5/weather?zip=98105,us&units=imperial&appid=de5c2116380f8c980ccb5a4a25b4a2f5',
  method: "GET",
  success: function(data){
    alert(data);
  })
}
