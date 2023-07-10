import Search from "./components/Search";
import Result from "./components/Result";
import React, {useState} from "react";
import axios from 'axios';
import './style.css';

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);
  const changeSearch = (value) => {
    setSearch(value);
  }
  const searchWeatherHandler = () => {
    if(search !== '') {
      axios.get(
        `http://api.weatherapi.com/v1/current.json?key=528e1e8a83664c2ebfd195956232206&q=${search}&aqi=no`
        ).then(
          (response) => {
            setWeather(response.data);
            console.log(response.data);
            if(history.indexOf(search) === -1) {
              setHistory([...history,search]);
            }
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  const historySearchHandler = async (data) => {
    await setSearch(data);
    if(data !== '') {
      axios.get(
        `http://api.weatherapi.com/v1/current.json?key=528e1e8a83664c2ebfd195956232206&q=${data}&aqi=no`
        ).then(
          (response) => {
            setWeather(response.data);
            console.log(response.data);
            if(history.indexOf(data) === -1) {
              setHistory([...history,data]);
            }
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }
  return (
    <div className="App">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
      <Result weatherData={weather} historyData={history} historySearch={historySearchHandler}/>
    </div>
  );
}

export default App;
