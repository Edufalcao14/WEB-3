import { useState ,useEffect } from 'react'
import Persons from './components/Persons/app';
import Filter from './components/Filters/app';
import PersonForm from './components/PersonForm/app';

import personsAPI from './components/services/personsAPI';

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    personsAPI
      .getAll()
      .then(response => {
        setPersons(response.data);
        console.log("Persons :" ,response.data);
      });
  }, []);

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
 
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} est déjà ajouté au répertoire`);
      return;
    }
    
    personsAPI
    .create(newPerson)
    .then(reponse => {
      setPersons(persons.concat(reponse.data));
      setNewName(''); 
      setNewNumber('');
    })
    .catch(error => {
      alert(`Erreur: ${error.response?.status === 404 ? 'La ressource demandée est introuvable.' : error.message}`);
    });
};

const deletePerson = (personProps) => {
  if (!persons.some(person => person.id === personProps.id)) {
    alert(`Person with ID ${personProps.id} n'est pas trouvé.`);
    return;
  }
  if ( window.confirm(`Delete ${personProps.name} ?`)) {
    personsAPI
    .deletePerson(personProps.id)
    .then(() => {
      setPersons(persons.filter(person => person.id !== personProps.id));
    })
    .catch(error => {
      alert(`Erreur: ${error.response?.status === 404 ? 'La ressource demandée est introuvable.' : error.message}`);
    });
  }else{
    return;
  }
};
  const personsToShow = filter === '' ? persons : persons.filter(person => 
    person.name.toLowerCase().startsWith(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      
      <PersonForm 
      newName={newName} 
      newNumber={newNumber} 
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      addPerson={addPerson} />

      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePersonhandler={deletePerson} />
    </div>
  )
}

export default App