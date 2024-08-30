import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import InputCard from './InputCard';
import ConfirmationPopup from './ConfirmationPopup';

function Foreground() {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    desc: "",
    filesize: "",
    close: true,
    tag: { isOpen: true, tagTitle: "", tagColor: "green" },
  });
  const [showPopup, setShowPopup] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const addNote = () => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setNewNote({
      desc: "",
      filesize: "",
      close: true,
      tag: { isOpen: true, tagTitle: "", tagColor: "green" },
    });
  };

  const handleDelete = (note) => {
    setNoteToDelete(note);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    const updatedNotes = notes.filter(note => note !== noteToDelete);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setShowPopup(false);
  };

  const cancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <div ref={ref} className='relative w-full h-full p-5'>
      {notes.map((note, index) => (
        <Card key={index} data={note} reference={ref} onDelete={handleDelete} />
      ))}

      {/* InputCard Component for adding new notes */}
      <InputCard newNote={newNote} setNewNote={setNewNote} addNote={addNote} />

      {showPopup && (
        <ConfirmationPopup 
          message="Are you sure you want to delete this note?" 
          onConfirm={confirmDelete} 
          onCancel={cancelDelete} 
        />
      )}
    </div>
  );
}

export default Foreground;
