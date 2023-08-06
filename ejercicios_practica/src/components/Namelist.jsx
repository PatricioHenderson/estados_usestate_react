import React from 'react'
import { useState } from 'react'

function Namelist() {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>


            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button
                onClick={() => {
                    handleAddName();
                    console.log(names);
                    console.log(inputValue);
                }}
            >
                Agregar Nombre
            </button>
            <h2>Lista de nombres</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Namelist