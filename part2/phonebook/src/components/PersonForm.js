
import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleContactChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()

    let found = persons.filter(person => (person.name === newName));

    if (found.length >= 1) {
      window.alert(`${newName} is already added to the phonebook`)
      setNewName('')
    } else {
      const contactObject = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <form onSubmit={addContact}>
      <div>
        Name: <input value={newName} onChange={handleContactChange} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

export default PersonForm