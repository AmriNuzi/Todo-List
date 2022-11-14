import React from "react";
// import { useState, useEffect } from "react";
import { Button, } from 'react-bootstrap';


function NewNote (props){
    const [ text, setText ] = React.useState(props.text);
    const [ title, setTitle ] = React.useState(props.title);

    const handleSave = (e) => {
        const todo = {
            id: new Date().getTime(),
            title: title,
            text: text
        }

        props.onSave(todo);
    }
    
    return(
        <div className="form">
            
            <div className="save-button">
                <span></span>
                <input type="text" value={title} placeholder=" Title . . ." onChange={(e) => setTitle(e.target.value)} />
                <Button onClick={handleSave} value="Save">Save</Button>
           </div>
            <span></span>
            <textarea onChange={(e) => setText(e.target.value)}>{text}</textarea>
            
        </div>
    )
}


export default NewNote;