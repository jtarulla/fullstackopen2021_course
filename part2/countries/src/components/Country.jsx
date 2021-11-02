import React from "react";
import Weather from "./Weather";

const Country = ({country}) => (
    <div>
        <h2>{country.name}</h2>
        <span>
            Capital: {country.capital}
        </span> <br />
        <span>
            Population: {country.population}
        </span>

        <h3>Languages</h3>
        <ul>
            {
                country.languages.map((language, index) => <li key={index}>{language.name}</li>)
            }
        </ul>
        <img src={country.flag} alt="flag" height="120" />
        <h2>Weather in {country.capital}, {country.name}</h2>
        <Weather city={country.capital} />
    </div>
)

export default Country;