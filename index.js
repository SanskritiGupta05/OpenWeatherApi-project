let apiKey = `474d1614b27a2e3cdb4309eb3876d99a`;

const weather = document.getElementById("weather");


document.getElementById('button-addon1').addEventListener('click', current);

document.getElementById('button-addon2').addEventListener('click', search);


function search() {
  let input = document.getElementById("input");
  const city = input.value;

  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  //temperature of a particular city
  fetch(url1)
        .then((res) => res.json())
        .then((data) => {
          

          cityHeading.innerHTML = city;
  
          const weatherDescription = data.weather[0].main;
          weather.textContent = weatherDescription;
          
          const kelvin = data.main.temp;
  
          const temp = document.getElementById("temp");
          const temperature = kelvin - 273.15;
          const celcius = temperature.toFixed(0);
          temp.textContent = celcius;
          
          //for celcius
          function celTemp(){
            temp.textContent = celcius;
          }
  
          cel.addEventListener("click", celTemp);
          
      }).catch((err) => console.log(err))
  
  }

//current temperature
function current() {
  function handlePosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
        
          const weatherDescription = data.weather[0].main;
          weather.textContent = weatherDescription;
          
          const kelvin = data.main.temp;
  
          const temp = document.getElementById("temp");
          const temperature = kelvin - 273.15;
          const celcius = temperature.toFixed(0);
          temp.textContent = celcius;
          
          //for celcius
          function celTemp(){
            temp.textContent = celcius;
          }
          cel.addEventListener("click", celTemp);
      }).catch((err) => console.log(err))
  }
  navigator.geolocation.getCurrentPosition(handlePosition)
}



  var myDate = new Date();
  var myDay = myDate.getDay();
        
  // Array of days.
  var weekday = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Display the DAY
  let day = document.getElementById("day");
  day.innerHTML = weekday[myDay];
        
  // get hour value.
  var hours = myDate.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = myDate.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var myTime = hours + " " + " : " + minutes;

  // Display the current Time
  let time = document.getElementById("time");
  time.innerHTML = myTime;


  //Button : to display city name in the heading
  const button = document.getElementById("button-addon2");
  let input = document.getElementById("input");
  let cityHeading = document.getElementById("city");

  function myFunction(){
    const inputValue = input.value;
    cityHeading.innerHTML = inputValue;
  }

  button.addEventListener("click", myFunction);


  //For fahrenheit
  const far = document.getElementById("far");
  const temp = document.getElementById("temp");

  function farTemp(){
    var fahrenheit = (temp.innerHTML * 9/5) + 32;
    var roundFahr = Math.floor(fahrenheit);
    temp.innerHTML = roundFahr;
  }

  far.addEventListener("click", farTemp);
  


