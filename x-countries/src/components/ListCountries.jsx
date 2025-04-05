import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListCountries.css";

function ListCountries() {
  const [countriesData, setCountriesData] = useState([]);
  const fetchCountries = async () => {
    try {
      let response = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      console.log("response", response);
      setCountriesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <div className="main">
      <h1>Countries List</h1>
      <div className="countryList">
        {countriesData &&
          countriesData.length > 0 &&
          countriesData.map((ele) => {
            return (
              <div className="countryCard">
                <img src={ele.flag} alt={ele.name} className="image" />
                <p>{ele.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListCountries;
