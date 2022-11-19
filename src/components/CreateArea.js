import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const [isExpand, setExpand] = useState(false)

  function expandBox() {
    setExpand(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note)
    setNote({title: "",
    text: "",})
    e.preventDefault()
  }


  return (
    <div>
      <form className="create-note" >
        {isExpand && <input name="title"
         onChange={handleChange}
          placeholder="Title"
           value={note.title} />}

        <textarea name="text" onClick={expandBox} onChange={handleChange} placeholder="Take a note..."
         rows={isExpand ? 4 : 1} value={note.text} />

        <Zoom in={isExpand}>
         <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
