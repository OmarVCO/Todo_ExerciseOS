import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import TodoList from "./components/TodoList.js";
// import TodoForm from "./Components/TodoForm.js";
// import Header from "./Components/Header.js";
// import Todo from "./components/Todo.js";

function App() {
  const[data,setData] = useState({})

  const url =`https://jsonplaceholder.typicode.com/users/1/todos`

      axios.get(url).then((response) => { 
        setData(response.data)
        console.log(response.data)
        // console.log(data[4].id)
      })
      return (
        <div className='container'>
          <div className='app'>
            <div className='header'>
              {/* <Header /> */}
            </div>
            <div className='todosummary'>
              <div className='todolist'>
                <TodoList />
              </div>
              <div className='todoactions'>
                <div className='newtodo'>
                  {/* <NewTodo /> */}
                </div>
                <div className='deltodo'>
                  {/* <Deltodo /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
export default App;
