import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import Country from './components/Country';

const COUNTRIES_PROMISE = axios.get(process.env.REACT_APP_COUNTRIES_API)

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ newSearchField, setNewSearchField ] = useState('')
  const [ countrySelected, setCountrySelected ] = useState({})

  const getCountries = async () => {
    try {
      const countriesObject = await COUNTRIES_PROMISE
  
      setCountries(countriesObject.data);
    } catch(error) {
      console.log(error);
      window.alert('Could not fetch Countries')
    }    
  }

  useEffect(() => getCountries(), [])

  const changeSearchField = event => {
    setNewSearchField(event.target.value.toLocaleLowerCase());

    newSearchField === '' && setCountrySelected({})

    filteredCountries().length === 1 && setCountrySelected(filteredCountries()[0])
  }

  const filteredCountries = () => {
    return countries.filter(
      country => country.name.toLocaleLowerCase().includes(newSearchField)
    )
  }

  const showCountry = country => {
    setCountrySelected(country);
  }

  const countryFiltered = filteredCountries()[0]


  return (
    <div className="App">
      Find countries <input onChange={changeSearchField} value={newSearchField} />
      {
        filteredCountries().length > 10 &&
          <div>Too many matches, specify another filter</div>
      }

      {
        filteredCountries().length < 10 && filteredCountries().length !== 1 &&
          <CountryList countries={filteredCountries()} handleClick={showCountry} />
      }

      {
        filteredCountries().length === 1 && !Object.keys(countrySelected).length &&
          <Country country={countryFiltered} />
      }

      {
        Object.keys(countrySelected).length > 0 &&
          <Country country={countrySelected} />
      }
    </div>
  );
}

export default App;