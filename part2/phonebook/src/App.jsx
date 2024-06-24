import { useEffect, useState } from 'react'

import personsService from './services/persons'

const Filter = ({ filterBy, handleChange }) => {
  return (
    <div>
      filter shown with <input value={filterBy} onChange={handleChange} />
    </div>
  )
}

const PersonForm = ({ handleSubmit, nameValue, handleNameChange, numberValue, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={nameValue} onChange={handleNameChange} />
      </div>

      <div>
        number: <input value={numberValue} onChange={handleNumberChange} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, filterBy, handleClick }) => {
  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(filterBy.toLowerCase().trim())
  )

  return (
    <>
      {filteredPersons.map(person =>
        <p key={person.id}>
          {person.name} {person.number}

          &nbsp;

          <button type='button' onClick={() => handleClick(person)}>
            delete
          </button>
        </p>
      )}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    const nameFound = persons.some(
      person => newName.toLowerCase().trim() === person.name.toLowerCase()
    )

    if (nameFound) {
      window.alert(`'${newName}' is already added to phonebook`)
      return
    }

    const newContact = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    personsService
      .create(newContact)
      .then(personCreated => {
        setPersons(persons.concat(personCreated))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleFilterChange = event => {
    setFilterBy(event.target.value)
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Delete '${name}'?`)) {
      personsService
        .remove(id)
        .catch(() => {
          window.alert(`We did not find '${name}'`)
        })
        .finally(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterBy={filterBy}
        handleChange={handleFilterChange}
      />

      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        nameValue={newName}
        handleNameChange={handleNameChange}
        numberValue={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filterBy={filterBy}
        handleClick={handleDelete}
      />
    </div>
  )
}

export default App
