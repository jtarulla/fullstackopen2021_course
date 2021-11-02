import React from "react";

const CountryList = ({countries, handleClick}) => (
    countries.map(country => (
            <div key={country.numericCode}>
                {country.name}
                <button onClick={() => handleClick(country)}>show</button>
            </div>
        )
    )
)

export default CountryList;