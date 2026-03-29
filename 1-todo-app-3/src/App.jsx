import AppName from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/AppName";
import AddTodo from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/AddTodo";
import TodoItems from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/TodoItems";
import WelcomeMessage from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;