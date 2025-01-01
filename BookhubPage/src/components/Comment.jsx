import React, { useState } from "react";

function Comment({ onSubmit }) {
  const [name, setName] = useState("");
  const [bookName, setBookName] = useState(""); // New state for book name
  const [comment, setComment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleBookNameChange(event) {
    setBookName(event.target.value); // Update book name
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(name, bookName, comment); // Pass name, book name, and comment to the parent
    setName(""); // Clear name input
    setBookName(""); // Clear book name input
    setComment(""); // Clear comment textarea
  }

  return (
    <div className="commentSection">
      <h4>Share books you're reading now or plan to pick up soon</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <input
          value={bookName}
          onChange={handleBookNameChange} // Handle book name input
          placeholder="Book Name"
        />
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Your Comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comment;