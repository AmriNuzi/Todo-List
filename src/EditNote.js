import React, { useState, useEffect } from "react";
import { Button, } from 'react-bootstrap';


export const EditNote = (props) => {

    const [ text, setText ] = useState(props.todo?.text);
    const [ title, setTitle ] = useState(props.todo?.title);
    
    useEffect(() => {
        setText(props.todo?.text);
        setTitle(props.todo?.title);
    }, [props.todo])

    if (!props.todo) return null;

    const handleSave = (e) => {
        const todo = {
            id: props.todo.id,
            title: title,
            text: text
        }

        props.onSave(todo);
    }
    
    return (
        <div className="form">
            <div className="edit-del-button">
                <span></span>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Button onClick={handleSave}>Edit</Button> 
                <div className="delete">
                    <Button onClick={() => props.onDelete(props.todo.id)}>Del</Button>
                </div>
            </div>
            <span></span>
            <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
            
        </div>
    )
}
