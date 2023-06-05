import { useState } from "react";
import UpdateForm from "./UpdateForm";

function TodoItem({
  title,
  id,
  checked,
  toggleChecked,
  removeItem,
  updateItem,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <UpdateForm
          title={title}
          id={id}
          toggleChecked={toggleChecked}
          updateItem={updateItem}
          setIsEditing={setIsEditing}
        />
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
