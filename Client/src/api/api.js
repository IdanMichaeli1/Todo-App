import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

const returnData = (res) => res.data;

const getItems = () =>
  api
    .get("/todo-list")
    .then(returnData)
    .catch((err) => console.error(err));

const addItem = (title) =>
  api
    .post("/todo-list", { title })
    .then(returnData)
    .catch((err) => console.error(err));

const removeItem = (id) =>
  api
    .delete(`/todo-list/${id}`)
    .then(returnData)
    .catch((err) => console.error(err));

const toggleChecked = (id, checked) =>
  api
    .put(`/todo-list/${id}`, { checked })
    .then(returnData)
    .catch((err) => console.error(err));

const updateItem = (id, title) =>
  api
    .put(`/todo-list/${id}`, { title })
    .then(returnData)
    .catch((err) => console.error(err));

export default { addItem, getItems, removeItem, toggleChecked, updateItem };
