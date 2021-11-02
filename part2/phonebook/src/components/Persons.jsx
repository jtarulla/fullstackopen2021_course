import React from "react";

const Persons = ({personsObject, handleDeletePerson}) => (
    personsObject.map(person => {
        return <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDeletePerson(person)}>
                delete
            </button>
        </div>
    })
)

export default Persons;