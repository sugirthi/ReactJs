// import "./weather.css";
// import { useState } from "react";

// const api = {
//   key: "10d0856f549c63283f2d565585a81f5b",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// export function Weather() {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState({});

//   /*
//     Search button is pressed. Make a fetch call to the Open Weather Map API.
//   */
//   const searchPressed = () => {
//     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setWeather(result);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* HEADER  */}
//         <h1>Weather App</h1>

//         {/* Search Box - Input + Button  */}
//         <div>
//           <input
//             type="text"
//             placeholder="Enter city/town..."
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button onClick={searchPressed}>Search</button>
//         </div>

//         {/* If weather is not undefined display results from API */}
//         {typeof weather.main !== "undefined" ? (
//           <div>
//             {/* Location  */}
//             <p>{weather.name}</p>

//             {/* Temperature Celsius  */}
//             <p>{weather.main.temp}°C</p>

//             {/* Condition (Sunny ) */}
//             <p>{weather.weather[0].main}</p>
//             <p>({weather.weather[0].description})</p>
//           </div>
//         ) : (
//           ""
//         )}
//       </header>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export function Weather() {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);

//   const API_KEY = '10d0856f549c63283f2d565585a81f5b';

//   useEffect(() => {
//     if (location) {
//       axios
//         .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
//         .then(response => {
//         setWeatherData(response.data);
//         })
//         .catch(error => console.error(error));
//     }
//   }, [location]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     setLocation(e.target.location.value);
//   };

//   return (
//     <div className="weather">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="location">Enter a location:</label>
//         <input type="text" id="location" name="location" />
//         <button type="submit">Get Weather</button>
//       </form>
//       {weatherData && (
//         <>
//           <h2>Current Weather for {weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp} &deg;C</p>
//           <p>Feels Like: {weatherData.main.feels_like} &deg;C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//         </>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";

// function Weather() {
//   const [weather, setWeather] = useState({});
//   const [city, setCity] = useState("");

//   const getWeather = async (e) => {
//     e.preventDefault();
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;
//     const response = await axios.get(url);
//     setWeather(response.data);
//     setCity("");
//   };

//   return (
//     <div>
//       <h2>Weather App</h2>
//       <form onSubmit={getWeather}>
//         <input
//           type="text"
//           value={city}
//           placeholder="Enter city name"
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {weather.main && (
//         <div>
//           <h3>{weather.name}</h3>
//           <p>Temperature: {weather.main.temp} &deg;C</p>
//           <p>Humidity: {weather.main.humidity} %</p>
//           <p>Wind Speed: {weather.wind.speed} km/h</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Weather;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Weather() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '10d0856f549c63283f2d565585a81f5b';

  useEffect(() => {
    if (location) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error =>alert("give correct name"));
    }
  }, [location]);

  const Submit = a => {
    a.preventDefault();
    setLocation(a.target.location.value);
  };

  return (
    <div className="weather text-center mt-5">
      <form onSubmit={Submit}>
        <label htmlFor="location">Enter a location:</label>
        <input type="text" id="location" name="location" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <>
          <h2>Current Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Feels Like: {weatherData.main.feels_like} &deg;C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
 }

