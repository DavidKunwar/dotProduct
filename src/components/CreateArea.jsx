import React, { useState, useRef } from "react";

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

function CreateArea(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [card, setCard] = useState({
    title: "",
    description: "",
    type: ""
  });

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  function handleChange(event) {
    if(props.edit === true){
      props.setEdit(false)
    }

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
      if(props.onAdd){
        props.onAdd(card)
    }
    if(props.onEdit){
      props.onEdit(card.title, card.description, card.type)
    }
      setShow(!show);
      setCard({
        title: "",
        description: "",
        type: ""
      });
    }
  }

  return (
    <div ref={ref}>
      <Button className={props.list ? "add-edit-card" : "add-card"} onClick={handleClick}>{props.list ? 'Edit Card' : 'Add Card'}</Button>
      
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
          <form>
      <input
          name="title"
          onChange={handleChange}
          value={props.edit ? props.title : card.title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={props.edit ? props.desc : card.description}
          placeholder="Add Task..."
          rows="3"
        />
        <select name="type" defaultValue={props.type} onChange={handleChange}>
        <option value="">--select card--</option>
          <option value="todo" >Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button onClick={submitCard}>Add</button>
      </form>
          </Popover.Body>
        </Popover>
      </Overlay>
  
    </div>
  );
}

export default CreateArea;
