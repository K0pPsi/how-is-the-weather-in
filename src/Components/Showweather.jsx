const ShowWeather = (props) => {
  const handleClickButton = () => {
    {
      props.compareIsShown();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>The Weather in {props.city} is </h1>
        <p className="pa">{props.temp} degrees</p>
        <button className="btn test" onClick={handleClickButton}>
          New Request
        </button>
      </div>
    </div>
  );
};

export default ShowWeather;
