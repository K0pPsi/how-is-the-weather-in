import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [error, setError] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [temp, setTemp] = useState(null);

  const API_Key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url + API_Key);
        setLat(response.data[0].lat);
        setLon(response.data[0].lon);
      } catch (e) {
        setError(e.message);
      }
    };

    fetch();
  }, [url]);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        if (lat != null && lon != null) {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
          );

          setTemp(response.data.main.temp);
        }
      } catch (e) {
        setError(e.message);
      }
    };
    fetchTemp();
  }, [lat, lon]);

  return { temp, error };
};

export default FetchData;
