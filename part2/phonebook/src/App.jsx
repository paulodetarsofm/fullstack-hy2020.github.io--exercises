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

const Notification = ({ message, type }) => {
  if (message === null || type === null) {
    return null
  }

  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  )
}

const App = () => {
  const initialNotification = {
    message: null,
    type: null,
  }

  const [persons, setPersons] = useState([])
  const [filterBy, setFilterBy] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(initialNotification)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const autoCloseNotification = () => {
    setTimeout(() => setNotification(initialNotification), 5000)
  }

  const showErrorMessage = message => {
    setNotification({ message, type: 'error' })
    autoCloseNotification()
  }

  const showSuccessMessage = message => {
    setNotification({ message, type: 'success' })
    autoCloseNotification()
  }

  const resetForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleSubmit = event => {
    event.preventDefault()

    const personFound = persons.find(
      person => newName.toLowerCase().trim() === person.name.toLowerCase()
    )

    if (personFound) {
      const { id, name, number } = personFound

      if (number === newNumber.trim()) {
        showErrorMessage(`'${name}' is already added to phonebook`)
        return
      }

      if (window.confirm(`'${name}' is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {
          ...personFound,
          number: newNumber.trim()
        }

        personsService
          .update(id, changedPerson)
          .then(updatedPerson => {
            showSuccessMessage(`Updated '${changedPerson.name}'`)
            setPersons(persons.map(person => person.id === id ? updatedPerson : person))
            resetForm()
          })
          .catch(() => {
            showErrorMessage(`Unable to update the contact '${name}'`)
          })
      }
    } else {
      const newContact = {
        name: newName.trim(),
        number: newNumber.trim(),
      }

      personsService
        .create(newContact)
        .then(createdPerson => {
          showSuccessMessage(`Added '${newContact.name}'`)
          setPersons(persons.concat(createdPerson))
          resetForm()
        })
        .catch(() => {
          showErrorMessage('Unable to create new contact, please try again')
        })
    }
  }

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Delete '${name}'?`)) {
      personsService
        .remove(id)
        .then(deletedPerson => {
          showSuccessMessage(`Deleted '${deletedPerson.name}'`)
        })
        .catch(() => {
          showErrorMessage(`The contact '${name}' was not found`)
        })
        .finally(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
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

      <Notification message={notification.message} type={notification.type} />

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
