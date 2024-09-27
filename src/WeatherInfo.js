import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              {" "}
              <strong>Humidity:</strong> {Math.round(props.data.humidity)}%
            </li>
            <li>
              {" "}
              <strong>Wind:</strong> {Math.round(props.data.wind)}mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
