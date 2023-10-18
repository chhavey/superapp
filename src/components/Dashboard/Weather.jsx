import React, { useState, useEffect } from "react";
import styles from "./weather.module.css";

import temperature from "../../assets/temperature.png";
import pressure from "../../assets/pressure.png";
import line from "../../assets/Line.png";
import humidity from "../../assets/humidity.png";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    //API_Key = 9e364f4fab404d25902133114231110
    const API_URL =
      "https://api.weatherapi.com/v1/current.json?key=9e364f4fab404d25902133114231110&q=Jaipur&aqi=no";
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  if (!weather) {
    return null;
  }

  const apiTimeString = weather.location.localtime;
  const apiTime = new Date(apiTimeString);
  const formattedTime = `${apiTime.getDate().toString().padStart(2, "0")}-${(
    apiTime.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${apiTime.getFullYear()}
    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
    ${apiTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })} `;

  return (
    <>
      <div className={styles.weatherCard}>
        <h2 className={styles.weatherTime}>{formattedTime}</h2>

        <div className={styles.weatherDetails}>
          <div className={styles.box}>
            <img src={weather.current.condition.icon} alt="icon" />
            {weather.current.condition.text}
          </div>

          <img src={line} alt="line" style={{ height: "3rem" }} />

          <div className={styles.box}>
            <h1 style={{ fontWeight: 300, marginTop: 0 }}>
              {weather.current.temp_c}
              {`\u00B0`}C
            </h1>

            <div className={styles.minibox}>
              <img src={temperature} alt="temp" />
              {weather.current.pressure_mb} mbar <br />
              Pressure
            </div>
          </div>

          <img src={line} alt="line" style={{ height: "3rem" }} />

          <div className={styles.box}>
            <div className={styles.minibox}>
              <img src={pressure} alt="pressure" />
              {weather.current.wind_kph} km/h <br /> Wind
            </div>
            <br />
            <div className={styles.minibox}>
              <img src={humidity} alt="humidity" />
              &nbsp; &nbsp; {weather.current.humidity}% <br />
              &nbsp; &nbsp; Humidity
            </div>
          </div>

          {/* |{weather.current.temp_c}
          {`\u00B0`}C
          <img src={temperature} alt="temp" />
          {weather.current.pressure_mb} mbar Pressure |
          <img src={pressure} alt="pressure" />
          {weather.current.wind_kph} km/h
          <img src={humidity} alt="humidity" />
          {weather.current.humidity}% Humidity */}
        </div>
      </div>
    </>
  );
}

export default Weather;
