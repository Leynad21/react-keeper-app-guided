import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import CreateArea from './CreateArea'

const App = () => {

  const [itemsList, setItems] = useState([]);

  function addNote(newnote) {
    setItems((prevItems) => {
      return [...prevItems, newnote];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
    }
  


  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        />
      {itemsList.map( (iter, index) => {
        return (
        <Note 
          key = {index}
          id = {index}
          title = {iter.title}
          text = {iter.text}
          onChecked = {deleteNote}
          />
        )
          })}

      <Footer />
    </div>

  )
}

export default App