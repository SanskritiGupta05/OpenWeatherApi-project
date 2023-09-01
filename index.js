

let apiKey = `cabdbda40038ba7d1165b953b1c7bd6c`;

let input = document.getElementById("input");
let iconElement = document.getElementById('emoji');

const weather = document.getElementById("weather");
// const windElement = document.getElementById("wind");
// const humidElement = document.getElementById("humidity");


document.getElementById('button-addon2').addEventListener('click', search);

// on enter, trigger search function.
input.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
  if (event.key === 13) {
    event.preventDefault();
    console.log("Enter key pressed");
    search();
  }
});



//search function
function search() {

  const city = input.value;

  const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  //temperature of a particular city
  fetch(url1)
        .then((res) => res.json())
        .then((data) => {
          
          iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

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
          displayForcast(data);

        //   const windSpeed = data.wind.speed;
        // windElement.innerHTML = windSpeed;
        
        // const humidity = data.main.humidity;
        // humidElement.innerHTML = humidity;

        getForecast(data.coord);
       
          
      }).catch((err) => console.log(err))
  
  }

function getForecast(coordinates){
  console.log(coordinates);
  let apiKey = `cabdbda40038ba7d1165b953b1c7bd6c`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);

  
  fetch(apiUrl)
    .then((response) => response.json())
    .then(displayForcast);

}

// display forcast
function displayForcast(data){
  console.log(data.daily);
  let forcastElement = document.getElementById("forcast");
  let days = ["Thu", "Fri", "Sat", "Sun","Mon","Tue"];

  let forcastHTML = `<div class="row">`;

  days.forEach(function (day) {
    forcastHTML =
      forcastHTML +
      `
      <div class="col-2 text-center">
        <div style="font-size: 16px; color: #000; opacity: 0.5;" class="weather-forecast-date ">${day}</div>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          width="70"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span style="font-size: 16px; color: #000; opacity: 0.5;"  class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });

  forcastHTML = forcastHTML + `</div>`;
  forcastElement.innerHTML = forcastHTML;
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
  

