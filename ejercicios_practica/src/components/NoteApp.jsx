import React, { useState } from 'react'

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddNote = () => {
        if (inputValue.trim() !== '') {
            setNotes([...notes, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveNote = (index) => {
        const updateNotes = [...notes];
        updateNotes.splice(index, 1);
        setNotes(updateNotes);
    }
  return (
    <div>
        <div>NoteApp</div>
        <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button
            onClick={ () => {
                handleAddNote()
            }}
            >Add</button>
        
        <div>Notes</div>
        <ul>
            {notes.map((note, index ) =>(
                <li key={index}>{note}
                    <button
                        onClick={ () => {
                            handleRemoveNote(index)
                        }}> Remove</button>
                </li>
            )
            )}
        </ul>


    </div>
  )
}

export default NoteApp