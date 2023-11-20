import { useState } from "react";
import FetchData from "./FetchData";
import ShowWeather from "./Showweather";

const MainLayout = () => {
  const [city, setCity] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const { temp, error } = FetchData(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=`
  );

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const compareIsShown = () => {
    isShown === false ? setIsShown(true) : setIsShown(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {!isShown && (
        <div className="d-flex flex-column justify-content-center align-items-center border border-primary p-4">
          <h1>How is the Weather in</h1>
          <input
            className="form-control text-center mb-2"
            type="text"
            onChange={handleInput}
          />
          <button className="btn btn-primary" onClick={compareIsShown}>
            Go
          </button>
        </div>
      )}
      {isShown && (
        <ShowWeather temp={temp} city={city} compareIsShown={compareIsShown} />
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default MainLayout;
