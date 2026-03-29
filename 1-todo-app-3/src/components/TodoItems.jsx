import TodoItem from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/TodoItem";
import styles from "C:/Users/malvi/OneDrive/Desktop/React_Redux/1-todo-app-3/src/components/TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;