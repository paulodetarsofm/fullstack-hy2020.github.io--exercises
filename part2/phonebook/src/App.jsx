import { useState } from 'react'

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

const Persons = ({ persons, filterBy }) => {
  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(filterBy.toLowerCase().trim())
  )

  return (
    <>
      {filteredPersons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </>
  )
}

const Person = ({ person }) => {
  const { name, number } = person

  return (
    <p key={name}>
      {name} {number}
    </p>
  )
}

const App = () => {
  const initialPersons = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]

  const [persons, setPersons] = useState(initialPersons)
  const [filterBy, setFilterBy] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const nameFound = persons.some(
      person => newName.toLowerCase().trim() === person.name.toLowerCase()
    )

    if (nameFound) {
      window.alert(`${newName} is already added to phonebook`)
      return
    }

    const newContact = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    const updatedPersons = persons.concat(newContact)

    setPersons(updatedPersons)
    setNewName('')
    setNewNumber('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterBy={filterBy} handleChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        nameValue={newName}
        handleNameChange={handleNameChange}
        numberValue={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filterBy={filterBy} />
    </div>
  )
}

export default App
