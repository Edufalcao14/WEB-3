/* eslint-disable react/prop-types */
const Persons = ({ personsToShow , deletePersonhandler } ) => {
    return (
      <ul>
        {personsToShow.map((person, index) => (
          <>
          <li key={index}>
            {person.name} {person.number}
            <button style={{ padding: '5px' , margin: '5px' }} onClick={() => deletePersonhandler(person)}>delete</button>
            </li>
          </> 
        ))}
      </ul>
    );
  };
export default Persons;