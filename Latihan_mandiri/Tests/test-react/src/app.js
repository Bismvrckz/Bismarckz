import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import InputBox from "./components/InputBox";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, action: "Bangun Tidur", isComplete: true },
    { id: 2, action: "Mandi", isComplete: false },
    { id: 3, action: "Nyarap", isComplete: false },
    { id: 3, action: "Nyusu", isComplete: false },
  ]);

  const onCompleteTodo = (todoId) => {
    const mappedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: true };
      } else {
        return todo;
      }
    });

    setTodos(mappedTodos);
  };

  const onCancelTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isComplete: false };
        } else {
          return todo;
        }
      })
    );
  };

  const onDeleteTodo = (todoId) => {
    const mappedTodos = todos.filter((todo, idx) => {
      return todo.id != todoId;
    });
    setTodos(mappedTodos);
  };

  const addTodos = (keyword) => {
    const todo = { id: Math.random(), action: keyword, isComplete: false };
    setTodos([...todos, todo]);
  };

  const renderList = () => {
    return todos.map((todo) => {
      let actionClass = "lead";
      if (todo.isComplete) actionClass += " text-decoration-line-through";
      return (
        <TodoItem
          todo={todo}
          actionClass={actionClass}
          onDeleteTodo={onDeleteTodo}
          onCancelTodo={onCancelTodo}
          onCompleteTodo={onCompleteTodo}
        />
      );
    });
  };

  let selese = 0;
  todos.forEach((todo) => {
    if (todo.isComplete == true) {
      selese += 1;
    }
  });

  return (
    <div className="container p-5">
      <InputBox addTodo={addTodos} list={todos} selese={selese} />
      {renderList()}
    </div>
  );
}

export default App;
