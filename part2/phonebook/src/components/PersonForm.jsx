import React from "react";

const PersonForm = (
    {
        handleNewPerson,
        handleNameChange,
        handleNumberChange,
        nameValue,
        numberValue
    }) => (
        <form onSubmit={handleNewPerson}>
            <div>
                name: <input onChange={handleNameChange} value={nameValue} required />
            </div>
            <div>
                number: <input onChange={handleNumberChange} value={numberValue} required />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

export default PersonForm;