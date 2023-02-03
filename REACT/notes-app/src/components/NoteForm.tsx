import { useState } from "react";

export const NoteForm = (props: any) => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [areNotesShown, setAreNotesShown] = useState(true);

  console.log({ note, notes });
  //state setinimas yra pradinio lygio, nekartoti realiuose projektuose ir nenaudoti any tipo

  return (
    <>
      {props.children}
      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <input
        checked={areNotesShown}
        type="checkbox"
        onChange={(e) => setAreNotesShown(e.target.checked)}
      />
      <button
        onClick={() => {
          setNotes([...notes, note]);
          setNote("");
        }}
      >
        Click
      </button>

      {areNotesShown &&
        notes.map((curNote, i) => <p key={curNote + i}>{curNote}</p>)}
    </>
  );
};
