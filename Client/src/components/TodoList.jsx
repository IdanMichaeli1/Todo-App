import TodoItem from "./TodoItem";

function TodoList({ itemsList, toggleChecked, removeItem, updateItem }) {
  return (
    <>
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {itemsList.length === 0 && "List is empty"}
        {itemsList.map((item) => (
          <TodoItem
            {...item}
            key={item.id}
            toggleChecked={toggleChecked}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
