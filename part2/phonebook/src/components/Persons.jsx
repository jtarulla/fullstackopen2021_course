import React from "react";

const Persons = ({personsObject}) => (
    personsObject.map(person => {
        return <div key={person.id}>{person.name} {person.number}</div>
    })
)

export default Persons;