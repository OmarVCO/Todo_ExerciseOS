import React, {useState} from 'react';
// import axios from 'axios';
import './App.css';
// import TodoList from "./Components/TodoList.js";
// import TodoForm from "./Components/TodoForm.js";
// import Header from "./Components/Header.js";
import Todo from "./Components/Todo.js";


function App() {

  const [todos, setTodos] = useState([]);

    // axios.get("/todos").then((serverTodos) => {
    //     setTodos(serverTodos.data);
    // });
  
  return (

    <div className="container">
      <div className="App">
        {/* <Header /> */}
        {/* <TodoForm /> */}
        {/* <TodosList todos={todos} /> */}
        {/* <DeleteTodo /> */}
        <Todo />
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
