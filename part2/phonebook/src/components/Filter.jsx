import React from "react";

const Filter = ({handleChange, value}) => (
    <div>
        filter shown with <input onChange={handleChange} value={value} required />
    </div>
)

export default Filter;