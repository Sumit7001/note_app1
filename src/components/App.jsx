import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setNotesList] = useState([]);

  function addNote(newNote) {
    if (newNote.title === "" && newNote.content === "") {
      alert("Can't add an empty note!");
      return;
    }
    setNotesList((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(idOfNote) {
    setNotesList((prev) => {
      return prev.filter((val, index) => {
        return index !== idOfNote;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
