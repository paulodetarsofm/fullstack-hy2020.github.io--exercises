import { useEffect, useState } from 'react'

import countriesService from './services/countries'
import weatherService from './services/weather'

const Filter = ({ filterBy, handleChange }) => {
  return (
    <div>
      find countries <input value={filterBy} onChange={handleChange} />
    </div>
  )
}

const Countries = ({ countries, weatherDetails, handleCurrentCountry }) => {
  switch (true) {
    case countries.length < 1:
      return (
        <div>No matches</div>
      )

    case countries.length === 1:
      return (
        <Country country={countries[0]} weatherDetails={weatherDetails} />
      )

    case countries.length > 10:
      return (
        <div>Too many matches, specify another filter</div>
      )

    default:
      return countries.map(country =>
        <div key={country.cca2}>
          {country.name.common}
          <button type='button' onClick={() => handleCurrentCountry(country)}>show</button>
        </div>
      )
  }
}

const Country = ({ country, weatherDetails }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      {country.capital   && <div>capital {country.capital.join(', ')}</div>}
      {country.area      && <div>area {country.area}</div>}
      {country.languages && <Languages languages={country.languages} />}
      {country.flag      && <Flag flag={country.flag} />}
      {weatherDetails    && <Weather capital={country.capital?.[0]} details={weatherDetails} />}
    </>
  )
}

const Languages = ({ languages }) => {
  return (
    <>
      <h2>languages:</h2>
      <ul>
        {Object.entries(languages).map(([key, language]) =>
          <li key={key}>{language}</li>
        )}
      </ul>
    </>
  )
}

const Flag = ({ flag }) => {
  const flagStyles = {
    fontSize: '10em',
    lineHeight: 1,
  }

  return (
    <div style={flagStyles}>{flag}</div>
  )
}

const Weather = ({ capital, details }) => {
  const weather = details.weather?.[0] ?? null

  const imgSrc = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
  const imgTitle = `Weather in ${capital}: ${weather.description}`

  return (
    <>
      <h2>Weather in {capital}</h2>
      <p>temperature {details.main.temp}°C</p>
      {weather && <p><img src={imgSrc} alt={imgTitle} title={imgTitle} /></p>}
      <p>wind {details.wind.speed} m/s</p>
    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [currentCountry, setCurrentCountry] = useState(null)
  const [capital, setCapital] = useState(null)
  const [weatherDetails, setWeatherDetails] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(returnedCountries => {
        setCountries(returnedCountries)
      })
  }, [])

  useEffect(() => {
    if (capital) {
      weatherService
        .getWeather(capital)
        .then(returnedWeatherDetails => {
          setWeatherDetails(returnedWeatherDetails)
        })
    }
  }, [capital])

  const handleFilterChange = event => {
    setFilterBy(event.target.value)

    setCurrentCountry(null)
    setCapital(null)
    setWeatherDetails(null)
  }

  const handleCurrentCountry = country => {
    setCurrentCountry(country)

    setCapital(null)
    setWeatherDetails(null)
  }

  /**
   * We need to define the final list of countries that will be displayed. To do this, we use the following priority:
   *
   * 1) If we have a country defined (when the user clicks the "Show" button), we look for the exact name (we don't have
   *    countries with the same name)
   *
   * 2) If we don't have a country defined yet, we search for countries that have the text defined in the filter field
   */
  let filteredCountries = []

  if (currentCountry) {
    filteredCountries = countries.filter(
      country => country.name.common.toLowerCase() === currentCountry.name.common.toLowerCase()
    )
    } else if (filterBy) {
    filteredCountries = countries.filter(
      country => country.name.common.toLowerCase().includes(filterBy.toLowerCase().trim())
    )
  }

  /**
   * When there is only one country in the list, we need to define the capital, which will be used to search for
   * meteorological details. Some countries have more than one capital, so we need to define which one to use, in this
   * case, we always take the first item
   */
  if (filteredCountries.length === 1 && !capital) {
    const filteredCapital = filteredCountries[0].capital?.[0] ?? null

    if (filteredCapital) {
      setCapital(filteredCapital)
    }
  }

  return (
    <>
      <Filter
        filterBy={filterBy}
        handleChange={handleFilterChange}
      />

      {filteredCountries.length > 0 &&
        <Countries
          countries={filteredCountries}
          weatherDetails={weatherDetails}
          handleCurrentCountry={handleCurrentCountry}
        />
      }
    </>
  )
}

export default App
