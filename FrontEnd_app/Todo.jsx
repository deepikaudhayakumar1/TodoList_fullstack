import { useEffect, useState } from "react";
import TodoService from "./TodoService.jsx";
import "./Todo.css";
function Todo() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const res = await TodoService.getTodos();
    setTodos(res.data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title) return;

    await TodoService.addTodo({ title, completed: false });
    setTitle("");
    loadTodos();
  };

  const handleUpdate = async (id, completed) => {
    if (!editTitle) return;

    await TodoService.updateTodo(id, {
      title: editTitle,
      completed: completed
    });

    setEditId(null);
    setEditTitle("");
    loadTodos();
  };

  const handleDelete = async (id) => {
    await TodoService.deleteTodo(id);
    loadTodos();
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }} className="container">
      <h2 style={{textAlign:"center"}}>To-Do List</h2>

      <form onSubmit={handleAdd}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          style={{ padding: "10px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px" }}
        className="addButton"
        >
          ➕ Add
        </button>
      </form>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 ,flex:1,overflow:"auto"}}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              border: "2px solid #ccc",
              padding: "8px"
            }}
          >
            {editId === todo.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button
                  onClick={() => handleUpdate(todo.id, todo.completed)}
                  className="saveButton"
                >
                   💾 Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>

                <div>
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditTitle(todo.title);
                    }}
                    style={{ marginRight: "5px" }}
                    className="editButton"
                  >
                  ✏️ Edit
                  </button>

                  <button onClick={() => handleDelete(todo.id)}
                    className="deleteButton">
                    🗑 Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;