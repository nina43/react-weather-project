import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1bf07a19dabb35aod3aet5596042cc7f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={55} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecastTemperature-max">19°</span>
            <span className="WeatherForecastTemperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
