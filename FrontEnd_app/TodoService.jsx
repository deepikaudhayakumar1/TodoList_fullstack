import axios from "axios";

const API = "http://localhost:8080/todos";

const TodoService = {
  getTodos: function () {
    return axios.get(API);
  },

  addTodo: function (todo) {
    return axios.post(API, todo);
  },

  deleteTodo: function (id) {
    return axios.delete(API + "/" + id);
  },

  updateTodo: function (id, todo) {
    return axios.put(API + "/" + id, todo);
  },
};

export default TodoService;