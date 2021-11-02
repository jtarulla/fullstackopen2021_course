import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import services from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchField, setNewSearchField ] = useState('')

  const namesArray = persons.map(person => person.name);

  const nameExist = namesArray.find(name => name.trim() === newName.trim())

  const getPersons = async () => {
    const response = await services.getAll();
    setPersons(response.data);
  }

  useEffect(() => getPersons(), []);
    
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
    const newPersonObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    
    if (newName && nameExist) {
      const personToUpdate = persons.find(person => person.name === nameExist);
      const updatedPerson = {...personToUpdate, number: newNumber};

      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        && services
            .update(personToUpdate.id, updatedPerson)
            .then(response => {
              setPersons(persons.map(
                person => person.id !== personToUpdate.id ? person : response.data
              ))}
            ).catch(error => 
              alert(`We couldn't update the number of ${personToUpdate.name}`)
            )
    } else if(newName && newNumber) {
      services
        .create(newPersonObject)
        .then(response =>{
          setPersons(persons.concat(response.data));
        }).catch(error => 
          alert(`Something went wrong: ${error.response.data.slice(0, 50)}...`)
        )
    }

    setNewName('');
    setNewNumber('');
    setNewSearchField('');
    event.preventDefault();
  }

  const deletePerson = personToDelete => {
    if(window.confirm(`Delete ${personToDelete.name}?`)) {
      const newPersonsObject = persons.filter(
        person => person.id !== personToDelete.id
      )

      services
        .remove(personToDelete.id)
        .then(
         () => setPersons(newPersonsObject)
        ).catch(error => 
          alert(`The person ${personToDelete.name} was already deleted from server`)
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={changeSearchField} value={newSearchField} />

      <h2>Add a new</h2>
      <PersonForm
        handleNewPerson={addNewPerson}
        handleNameChange={changeName}
        handleNumberChange={changeNumber}
        nameValue={newName}
        numberValue={newNumber}
      />

      <h2>Numbers</h2>
      <Persons
        personsObject={filteredPersons()}
        handleDeletePerson={deletePerson}
      />
    </div>
  )
}

export default App