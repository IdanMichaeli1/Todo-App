import { useState } from "react";

function TodoItem({
  title,
  id,
  checked,
  toggleChecked,
  removeItem,
  updateItem,
}) {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (updatedTitle === "") return;
    updateItem(id, updatedTitle);
    toggleChecked(id, false);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form className="update-item-form" onSubmit={handleSaveClick}>
          <input
            type="text"
            value={updatedTitle}
            id="item"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button className="btn btn-primary">Save</button>
        </form>
      ) : (
        <li className="item">
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => toggleChecked(id, e.target.checked)}
            />
            {title}
          </label>
          <button className="btn btn-danger" onClick={() => removeItem(id)}>
            x
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Update
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem;
