import React from "react";
import "../style.css";

function Result({weatherData, historyData, historySearch}) {
    const historyItems = historyData.map(
        (item, index) => {
            return <li onClick={()=>historySearch(item)} key={index}>{item}</li>
        }
    )
    return (

      <div className="Result">
        <div className="history">
            <span>History</span>
            <ul>
                {historyItems}
            </ul>
        </div>
        <div className="display">
            {
                weatherData.length !== 0 ?
                <>
                    <h2>{weatherData.location.name}</h2>
                    <div>
                        <div>Temp: {weatherData.current.temp_c} deg</div>
                        <div>Temp: {weatherData.current.temp_f} fer</div>
                    </div>
                    <div>
                        <div><img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" /></div>
                        <div>{weatherData.current.condition.text}</div>
                    </div>
                </>
                :
                <>
                    <h3>Please enter the city name</h3>
                </>
            }
        </div>
      </div>
    );
  }
  
  export default Result;