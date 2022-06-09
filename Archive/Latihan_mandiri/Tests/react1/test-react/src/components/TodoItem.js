function TodoItem(masuk) {
  return (
    <div className="d-flex pt-3 border-bottom justify-content-between">
      <p className={masuk.actionClass}>
        {capitalizeFirstLetter(masuk.todo.action)}
      </p>
      <div>
        <button
          onClick={() => {
            masuk.onCompleteTodo(masuk.todo.id);
          }}
          className="btn btn-outline-success"
        >
          Complete
        </button>
        <button
          className="btn btn-outline-warning mx-2"
          onClick={() => {
            masuk.onCancelTodo(masuk.todo.id);
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            masuk.onDeleteTodo(masuk.todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default TodoItem;
