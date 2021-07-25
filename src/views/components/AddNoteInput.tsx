import React, {ChangeEvent, useState} from "react";
import '../styles/AddNoteInput.css';
import {ConvertNotesModel} from '../../models/responses/notes_model';

const AddNoteInput = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const onDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }
    const onBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    }
    const cleanForm = () => {
        setTitle(''); // clean the ui after su
        setDate('');
        setBody('');
    }
    const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent page reload
        const notesModel = ConvertNotesModel?.object(title, date, body);
        console.log(ConvertNotesModel?.noteModelToJson(notesModel));
        cleanForm();
    }
    return (
        <div className="list">
            <form onSubmit={onSubmit}>
                <input value={title} onChange={onTitleChange} className="input" type="text" placeholder="Title"
                       id="title" required/>
                <input value={date} onChange={onDateChange} className="input" type="datetime-local" name="date"
                       id="date" required/>
                <textarea value={body} onChange={onBodyChange} className="input" name="body" id="body" cols={30}
                          rows={10} placeholder="Enter description"/>
                <input className="btn" type="submit" value="Send"/>
            </form>
        </div>
    );
}
export default AddNoteInput;