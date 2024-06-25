import { useEffect, useState } from 'react'

import countriesService from './services/countries'

const Filter = ({ filterBy, handleChange }) => {
  return (
    <div>
      find countries <input value={filterBy} onChange={handleChange} />
    </div>
  )
}

const Countries = ({ countries, filterBy }) => {
  if (!filterBy) {
    return null
  }

  const filteredCountries = countries.filter(
    country => country.name.common.toLowerCase().includes(filterBy.toLowerCase().trim())
  )

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
        </div>
      )
  }
}

const Country = ({ country }) => {
  const flagStyles = {
    fontSize: '10em',
    lineHeight: 1,
  }

  return (
    <>
      <h1>{country.name.common}</h1>
      {country.capital   && <div>capital {country.capital.join(', ')}</div>}
      {country.area      && <div>area {country.area}</div>}
      {country.languages && <Languages languages={country.languages} />}
      {country.flag      && <div style={flagStyles}>{country.flag}</div>}
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

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(returnedCountries => {
        setCountries(returnedCountries)
      })
  }, [])

  const handleFilterChange = event => {
    setFilterBy(event.target.value)
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
      />
    </>
  )
}

export default App
