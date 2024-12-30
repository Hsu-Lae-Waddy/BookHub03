import React,{useState} from "react";
import Button from "./Button.jsx";

function Comment(){
    const [name, setName]=useState();
    const [comment, setComment] =useState();

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value)
    }
    function handleSubmit() {
        alert(`Name: ${name}\nComment: ${comment}`);
    }

    return(
        <div className="commentSection">
            <h4 className="H">Share books you’re reading now or plan to pick up soon</h4>
             <input value={name} onChange={handleNameChange} placeholder="Guest" />
             <p>Name: <b>{name}</b></p>
             <textarea value={comment} onChange={handleComment} placeholder="Free Suggestion" />
             <p>Suggestion: {comment}</p>
             <button className="SubmitBtn" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Comment