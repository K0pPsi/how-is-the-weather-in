import { useState } from "react";
import FetchData from "./FetchData";
import ShowWeather from "./Showweather";
import "../styles/stlye.css";

const MainLayout = () => {
  const [input, setInput] = useState(null);
  const [city, setCity] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const { temp } = FetchData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=`
  );

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const compareIsShown = () => {
    isShown === false ? setIsShown(true) : setIsShown(false);
    setCity(null);
  };

  const changeCity = () => {
    setCity(input);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {!isShown && (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>How is the Weather in</h1>
          <input
            className="form-control text-center mb-2"
            type="text"
            onChange={handleInput}
          />
          <button
            className="btn test"
            onClick={() => {
              compareIsShown();
              changeCity();
            }}
          >
            Go
          </button>
        </div>
      )}
      {isShown && (
        <ShowWeather temp={temp} city={city} compareIsShown={compareIsShown} />
      )}
    </div>
  );
};

export default MainLayout;
