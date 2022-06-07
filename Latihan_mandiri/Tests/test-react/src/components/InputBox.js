import { useState } from "react";

function InputBox(props) {
  // keyword : Bermain
  const [keyword, setKeyword] = useState();

  const onAddHandler = () => {
    let balik;
    props.list.forEach((todo) => {
      if (todo.action.toUpperCase() == keyword.toUpperCase()) {
        alert(`Sudah ada`);
        balik = true;
      }
    });
    if (balik) {
      return;
    }
    if (!keyword) {
      alert("Belum diisi");
      return;
    }
    props.addTodo(keyword);
  };

  const onInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="mb-2">
      <p>
        Done {props.selese} of {props.list.length}
      </p>
      <input
        type="text"
        className="form-control"
        placeholder="What is next ?"
        onChange={onInputChange}
      />
      <button
        onClick={onAddHandler}
        className="btn btn-outline-primary w-100 mt-2"
      >
        Add
      </button>
    </div>
  );
}

export default InputBox;
