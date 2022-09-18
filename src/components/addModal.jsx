import React, { useState } from "react";

// import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function AddModal(props){


    const [card, setCard] = useState({
        title: "",
        description: "",
        type: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        
        setCard(prevCard => {
          return {
            ...prevCard,
            [name]: value
          };
        });
    }

    function isValid(){
        const title = card.title
        const desc = card.description
    
        for(let i = 0; i < title.length; i++){
          if( !(title[i].toLowerCase() !== title[i].toUpperCase()) ){  
            return false
          }
        }
        if(desc.length > 25){
          return false
        }
        return true
      }
    
      function submitCard(event) {
        event.preventDefault();
        if(!isValid()){
          alert('Check your entry! \nTitile can only contain letters.\nDescriptions can only have 25 character lenght.')
        }else{
          props.onAdd(card);
          props.setShow(!props.show);
          setCard({
            title: "",
            description: "",
            type: ""
          });
        }
      }
    
    
    return (
        <Overlay
        show={props.show}
        target={props.target}
        placement="bottom"
        container={props.ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
          <form>
      <input
          name="title"
          onChange={handleChange}
          value={card.title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={card.description}
          placeholder="Add Task..."
          rows="3"
        />
        <select name="type" onChange={handleChange}>
        <option value="">--select card--</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button onClick={submitCard}>Add</button>
      </form>
          </Popover.Body>
        </Popover>
      </Overlay>

    )
}

export default AddModal