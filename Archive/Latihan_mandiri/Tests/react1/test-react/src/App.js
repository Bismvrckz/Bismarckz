import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import InputBox from "./components/InputBox";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTimeout(getTodos, 1500);
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get("http://localhost:2104/todos");
      setTodos(res.data);
    } catch (error) {
      console.log({ error: error.message, detail: error });
    }
  };

  const onCompleteTodo = async (todoId) => {
    try {
      const del = await axios.patch("http://localhost:2104/todos/" + todoId, {
        isComplete: true,
      });
      getTodos();
    } catch (error) {
      alert(`can't`);
      console.log(error.message);
    }
  };

  const onCancelTodo = async (todoId) => {
    try {
      const del = await axios.patch("http://localhost:2104/todos/" + todoId, {
        isComplete: false,
      });
      getTodos();
    } catch (error) {
      alert(`can't`);
      console.log(error.message);
    }
  };

  const onDeleteTodo = async (todoId) => {
    try {
      const del = await axios.delete("http://localhost:2104/todos/" + todoId);
      getTodos();
    } catch (error) {
      alert(`can't`);
      console.log(error.message);
    }
  };

  const addTodos = async (keyword) => {
    try {
      const id = new Date();
      const a = await axios.post("http://localhost:2104/todos", {
        id: id.getTime(),
        action: keyword,
        isComplete: false,
      });
      getTodos();
    } catch (error) {
      alert(`can't add`);
      console.log(error.message);
    }
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
      {todos.length ? (
        renderList()
      ) : (
        <h3 style={{ textAlign: "center" }}>Bentar ...</h3>
      )}
    </div>
  );
}

export default App;
