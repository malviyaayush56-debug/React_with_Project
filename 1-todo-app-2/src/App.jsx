// import { useState } from 'react'

// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo />
//       <div className="items-container">
//         <TodoItem1></TodoItem1>
//         <TodoItem2></TodoItem2>
//       </div>
//     </center>
//   );
   
// }

// export default App
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;