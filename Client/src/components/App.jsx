import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../style.css";
import { useState, useEffect } from "react";
import api from "../api/api";

function App() {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      setItemsList(await api.getItems());
    };

    fetchDataFromServer();
  }, []);

  const addItem = async (title) => {
    setItemsList(await api.addItem(title));
  };

  const removeItem = async (id) => {
    setItemsList(await api.removeItem(id));
  };

  const toggleChecked = async (id, checked) => {
    setItemsList(await api.toggleChecked(id, checked));
  };

  const updateItem = async (id, title) => {
    setItemsList(await api.updateItem(id, title));
  };

  return (
    <>
      <TodoForm onSubmit={addItem} />
      <TodoList
        itemsList={itemsList}
        toggleChecked={toggleChecked}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default App;
