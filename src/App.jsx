import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Counter from './conmponents/Counter';
import Filters from './conmponents/Filters';
import NoteList from './conmponents/NoteList';
import AddNoteForm from './conmponents/AddNoteForm';


function App() {

  const [notes, setNotes] = useState([
    { id: 1, text: "première note "},
    { id: 2, text: "deuxième note "},
    { id: 3, text: "troisième note "}
  ]);

  function onRemoveBtnHandler(noteToDelete) {
    console.log('hello', noteToDelete);
    // on garde tous les notes qui ne sont pas celle à supprimer
    const newNotes = notes.filter(note => note.id !== noteToDelete.id);
    // const newNotes = notes.filter(note => note !== noteToDelete);
    setNotes(newNotes);
  }

  return (
    <>
      <h1>Application Notes</h1>
      <Counter></Counter>
      <AddNoteForm></AddNoteForm>
      <Filters></Filters>
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler}></NoteList>
    </>
  );
}

export default App;
