import React, {useRef} from "react";
import "../style.css";

function Search(props) {
    const searchInput = useRef();
    return (
      <div className="Search">
        <input type="search" value={props.searchData} onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
        <button onClick={props.searchWeather}>Search</button>
      </div>
    );
  }
  
  export default Search;