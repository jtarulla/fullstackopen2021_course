import React from "react";

const PersonForm = (
    {
        handleSubmit,
        handleNameChange,
        handleNumberChange,
        nameValue,
        numberValue
    }) => (
        <form onSubmit={handleSubmit}>
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