import { useState } from "react";

function TodoForm(props) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;
    props.onSubmit(item);
    setItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default TodoForm;
