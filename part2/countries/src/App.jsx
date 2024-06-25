import { useEffect, useState } from 'react'

import countriesService from './services/countries'

const Filter = ({ filterBy, handleChange }) => {
  return (
    <div>
      find countries <input value={filterBy} onChange={handleChange} />
    </div>
  )
}

const Countries = ({ countries, filterBy, currentCountry, handleCurrentCountry }) => {
  if (!filterBy && !currentCountry) {
    return null
  }

  const filteredCountries = countries.filter(country => {
    const countryName = country.name.common.toLowerCase()

    // If we have a country defined, we will only display it, otherwise, it runs the filter using the provided text
    return (
      (currentCountry && countryName === currentCountry.name.common.toLowerCase()) ||
      (!currentCountry && countryName.includes(filterBy.toLowerCase().trim()))
    )
  })

  switch (true) {
    case filteredCountries.length < 1:
      return (
        <div>No matches</div>
      )

    case filteredCountries.length === 1:
      return (
        <Country country={filteredCountries[0]} />
      )

    case filteredCountries.length > 10:
      return (
        <div>Too many matches, specify another filter</div>
      )

    default:
      return filteredCountries.map(country =>
        <div key={country.cca2}>
          {country.name.common}
          <button type='button' onClick={() => handleCurrentCountry(country)}>show</button>
        </div>
      )
  }
}

const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      {country.capital   && <div>capital {country.capital.join(', ')}</div>}
      {country.area      && <div>area {country.area}</div>}
      {country.languages && <Languages languages={country.languages} />}
      {country.flag      && <Flag flag={country.flag} />}
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

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [currentCountry, setCurrentCountry] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(returnedCountries => {
        setCountries(returnedCountries)
      })
  }, [])

  const handleFilterChange = event => {
    setFilterBy(event.target.value)
    setCurrentCountry(null)
  }

  const handleCurrentCountry = country => {
    setCurrentCountry(country)
  }

  return (
    <>
      <Filter
        filterBy={filterBy}
        handleChange={handleFilterChange}
      />

      <Countries
        countries={countries}
        filterBy={filterBy}
        currentCountry={currentCountry}
        handleCurrentCountry={handleCurrentCountry}
      />
    </>
  )
}

export default App
