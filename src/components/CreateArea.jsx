import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const inputField = event.target.name;
    const inputValue = event.target.value;

    setInputNote((prev) => {
      return {
        ...prev,
        [inputField]: inputValue,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button
          onClick={(event) => {
            //prevent default behaviour of submit button
            event.preventDefault();

            //call addNote function passed through props and pass the note object
            //as argument to the addNote function
            props.onAdd(inputNote);

            //clear input field after adding note
            setInputNote({
              title: "",
              content: "",
            });
          }}
        >
          <span className="plus">+</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
