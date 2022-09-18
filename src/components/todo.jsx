import React from "react"
import Card from "./Card"


function Todo(props){ 

  function editCardData(id, title, desc, type){
    props.setTodoCards(prevCards => {
      return prevCards.filter((card, index) => {
        return index !== id;
      });
    });

    props.onAdd({
      title: title,
      description: desc,
      type: type
    })
  }
  
  function deleteCard(id) {
    props.setTodoCards(prevCards => {
      return prevCards.filter((card, index) => {
        return index !== id;
      });
    });
  }

    return (
        <div className="list">
            <div className="list-title">
                TODO
            </div>
      
            {props.cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        id={index}
                        title={card.title}
                        description={card.description}
                        type={card.type}
                        onDelete={deleteCard}
                        onEditCardData={editCardData}
                    />
                );
            })}
            
        </div>
    )
}

export default Todo