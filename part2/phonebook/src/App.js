import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchField, setNewSearchField ] = useState('')

  const namesArray = persons.map(person => person.name);

  const nameExist = namesArray.find(name => name.trim() === newName.trim())

  useEffect(() => {
      const eventHandler = async () => {
        const response = await axios.get('http://localhost:3001/persons')
        setPersons(response.data)
      }

      eventHandler()
    }, [])
    
  const changeName = event => {
    setNewName(event.target.value);
  }

  const changeNumber = event => {
    setNewNumber(event.target.value);
  }

  const changeSearchField = event => {
    setNewSearchField(event.target.value);
  }

  const filteredPersons = () => {
    return persons.filter(
      person => person.name.toLocaleLowerCase().includes(newSearchField)
    )
  }

  const addNewPerson = event => {
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    
    if (newName && nameExist) {
      window.alert(`${newName} is already added to phonebook`);
    } else if(newName && newNumber) {
      setPersons(persons.concat(nameObject));
    }

    setNewName('');
    setNewNumber('');
    setNewSearchField('');
    event.preventDefault();
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={changeSearchField} value={newSearchField} />

      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={addNewPerson}
        handleNameChange={changeName}
        handleNumberChange={changeNumber}
        nameValue={newName}
        numberValue={newNumber}
      />

      <h2>Numbers</h2>
      <Persons personsObject={filteredPersons()} />
    </div>
  )
}

export default App