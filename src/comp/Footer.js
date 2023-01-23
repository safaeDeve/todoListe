import React,{useContext,useState} from 'react'
import {DataContext} from './DataProvider'
import './styleT.css'

export default function Footer() {

  const [checkAll,setChekAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setChekAll(!checkAll)
  }


  const deleteTodo = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
      })
      setTodos(newTodos)
      setChekAll(false)
    }


  return (

    <>
    {


        todos.length === 0 ? <h2 id="titF">Félicitations Pas de Tache</h2>
       : <div  >
                  <label htmlFor="all">
                    <input type="checkbox" name="all" id="all" 
                    onClick={handleCheckAll} checked={checkAll}
                    />
                    Selectioner Tous
                  </label>
                  <button id="delete" onClick={deleteTodo}>Supprimer</button>
                  <p id="pag">Vous Avez {todos.filter(todo => todo.complete === false).length} tâches</p>
                  <br/>
                  


              </div>
      }
    </>
  )
}
