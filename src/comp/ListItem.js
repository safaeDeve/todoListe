import React,{useState} from 'react'
import './styleT.css'

export default function ListItem({todo,id,checkComplete,handleEditTodos}) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditvalue] = useState(todo.name)

  const handleOnEdit = () =>{
    setOnEdit(true)
  }

  const handleSave = id =>{
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditvalue(todo.name)
    }
  }


  if(onEdit){
        return (
          <li className="chek">
                  <input type="text" id="editValue" value={editValue}
                  name="editValue" 
                  onChange={e => setEditvalue(e.target.value.toLowerCase())}/>
              <button onClick={() => handleSave(id)} className="btnEdite">editer</button>
      </li>
        )
  }else{
      return (
        <li className="chek">
            <label htmlFor={id} className={todo.complete ? "active" : ""} id="label">
                <input type="checkbox" id={id} checked={todo.complete} 
                onChange={() => checkComplete(id)} className="chekbox" />
                  {todo.name}
            </label>
            <button disabled={todo.complete} onClick={handleOnEdit} className="btnEdite">editer</button>
    </li>
      )
    }
}




  
