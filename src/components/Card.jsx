import React, { useState } from "react";
import CreateArea from "./CreateArea"

function Card(props) {
  const [edit, setEdit] = useState(true)

  function handleEdit(title, desc, type){
    props.onEditCardData(props.id, title, desc, type)
  }

  function handleDelete() {
    props.onDelete(props.id)
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handleDelete}>DELETE</button>
      {/* <button onClick={handleEdit}>EDIT</button> */}
      <CreateArea list={true} onEdit={handleEdit} edit={edit} setEdit={setEdit} title={props.title} desc={props.description} type={props.type} />
    </div>
  );
}

export default Card
