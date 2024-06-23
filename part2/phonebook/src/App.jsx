import { useState } from 'react'

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
    { name: 'Arto Hellas', number: '040-1234567' }
  ]

  const [persons, setPersons] = useState(initialPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = event => {
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

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Numberbook</h2>

      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App
