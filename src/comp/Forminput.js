import React,{useState, useContext} from 'react'
import { DataContext } from './DataProvider'
import './styleT.css'



export default function Forminput() {
    const [todos,setTodos] = useContext(DataContext);
    const [todoName,setTodoName] = useState('');

    const addTodo = e =>{
      e.preventDefault();
      setTodos([...todos,{name:todoName,complete:false}])
      setTodoName('');
    }


  return (
    <form autoComplete="off" onSubmit={addTodo} id="form">
            <h1 id="t1">To do list</h1>
              <input type="text" name="todos" id="todos" 
              required placeholder="Quel est votre blan?"
              value={todoName}
              onChange={e => setTodoName(e.target.value.toLowerCase())}
              
              />
              <button type="submit" id="btn"><b>Ajouter</b></button>
          </form>

  )
}
