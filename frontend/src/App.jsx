import { useState, useEffect } from "react"
import { Todos } from "../components/Todos"
import { AddTodo } from "../components/AddTodo";
import axios from 'axios';
import { DeleteAllTodos } from "../components/DeleteAllTodos";

function App()
{
  const [todo,setTodo] = useState([]);
  useEffect(()=>          
  {
    console.log("hi there")
    let data = '';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/todos',
      headers: {},
      data : data
    };
    axios.request(config)
    .then((response) => {
      setTodo(response.data.todos)
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

  function handleAddTodo(newtodos)
  {
    setTodo(newtodos)
  }

  function handleDeleteAll(newtodos)
  {
    setTodo(newtodos)
  }

  return (
    <div>
      <DeleteAllTodos onDeleteAll={handleDeleteAll}/>
      <AddTodo onAdd={handleAddTodo}/>
      {todo.map(function(todos){
          return <Todos key={todos._id} title={todos.title} description={todos.description}/>
      })}
    </div>
  )
}

export default App
