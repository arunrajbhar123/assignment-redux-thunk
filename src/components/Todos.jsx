import React,{useEffect} from 'react'
import TodosInput from "./TodosInput.jsx";
import axios from "axios";
import TodoList from "./TodoList.jsx";
const Todos = () => {

 
  return (
    <div>
       <h4 style={{ textDecoration: "underline" }}>Todos App</h4>
      <TodosInput/>
      <hr />
      <h1 style={{ textDecoration: "underline" }}>TodoList</h1>
      <TodoList/>
    </div>
  )
}

export default Todos