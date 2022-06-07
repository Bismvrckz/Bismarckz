import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import InputBox from "./components/InputBox";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, action: "Bangun Tidur", isComplete: true },
    { id: 2, action: "Mandi", isComplete: false },
    { id: 3, action: "Nyarap", isComplete: false },
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
    const mappedTodos = todos.map((todo, idx) => {
      if (todo.id === todoId) {
        todos.splice(idx, 1);
      }
    });
    setTodos(mappedTodos);
  };

  const renderList = () => {
    return todos.map((todo) => {
      let actionClass = "lead";
      if (todo.isComplete) actionClass += " text-decoration-line-through";
      return (
        <div className="d-flex pt-3 border-bottom justify-content-between">
          <p className={actionClass}>{todo.action}</p>
          <div>
            <button
              onClick={() => {
                onCompleteTodo(todo.id);
              }}
              className="btn btn-outline-success"
            >
              Complete
            </button>
            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => {
                onCancelTodo(todo.id);
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                onDeleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  const addTodos = (keyword) => {
    const todo = { id: Math.random(), action: keyword, isComplete: false };
    setTodos([...todos, todo]);
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
