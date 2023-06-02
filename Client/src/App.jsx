import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./style.css";
import { useState, useEffect } from "react";
import api from "./api/api";

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

  return (
    <>
      <TodoForm onSubmit={addItem} />
      <TodoList
        itemsList={itemsList}
        toggleChecked={toggleChecked}
        removeItem={removeItem}
      />
    </>
  );
}

export default App;
