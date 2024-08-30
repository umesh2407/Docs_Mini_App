import React from 'react';

function InputCard({ newNote, setNewNote, addNote }) {
  return (
    <div className="fixed right-5 bottom-5 w-60 h-82 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden shadow-lg z-20">
      <h3 className="text-lg font-bold mb-4">Add a New Note</h3>

      <input
        type="text"
        value={newNote.desc}
        onChange={(e) => setNewNote({ ...newNote, desc: e.target.value })}
        placeholder="Description"
        className="w-full p-2 mb-3 text-black rounded-md"
      />

      <input
        type="text"
        value={newNote.filesize}
        onChange={(e) => setNewNote({ ...newNote, filesize: e.target.value })}
        placeholder="Name"
        className="w-full p-2 mb-3 text-black rounded-md"
      />

      <input
        type="text"
        value={newNote.tag.tagTitle}
        onChange={(e) => setNewNote({ ...newNote, tag: { ...newNote.tag, tagTitle: e.target.value } })}
        placeholder="Add Link"
        className="w-full p-2 mb-3 text-black rounded-md"
      />

      <select
        value={newNote.tag.tagColor}
        onChange={(e) => setNewNote({ ...newNote, tag: { ...newNote.tag, tagColor: e.target.value } })}
        className="w-full p-2 mb-3 text-black rounded-md "
      >
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button
        onClick={addNote}
        className="w-full bg-green-600 hover:bg-green-500 text-white p-2 rounded-md"
      >
        Add Note
      </button>
    </div>
  );
}

export default InputCard;
