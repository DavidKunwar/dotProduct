import React, { useState } from "react"
import CreateArea from "./components/CreateArea"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Todo from "./components/todo"
import Doing from "./components/doing"
import Done from "./components/done"


function App() {

  const [todoCards, setTodoCards] = useState([])
  const [doingCards, setDoingCards] = useState([])
  const [doneCards, setDoneCards] = useState([])

  function addCard(newCard) {
    if(newCard.type === "todo"){
      setTodoCards(prevCards => {
        return [...prevCards, newCard]
      })
    }
    if(newCard.type === "doing"){
      setDoingCards(prevCards => {
        return [...prevCards, newCard]
      })
    }
    if(newCard.type === "done"){
      setDoneCards(prevCards => {
        return [...prevCards, newCard]
      })
    }
  }

  // function deleteNote(id) {
  //   setCards(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }


  return (
    <div>
      <Header />

      <CreateArea onAdd={addCard} />
      
      <div className="list-container">
        <Todo onAdd={addCard} cards={todoCards} setTodoCards={setTodoCards}/>
        <Doing onAdd={addCard} cards={doingCards} setDoingCards={setDoingCards} />
        <Done onAdd={addCard} cards={doneCards} setDoneCards={setDoneCards} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
