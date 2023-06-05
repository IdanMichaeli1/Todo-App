import { useState } from "react";

function UpdateForm({ title, id, toggleChecked, updateItem, setIsEditing }) {
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleSaveClick = (e) => {
    e.preventDefault();
    if (updatedTitle === "") return;
    updateItem(id, updatedTitle);
    toggleChecked(id, false);
    setIsEditing(false);
  };

  return (
    <form className="update-item-form" onSubmit={handleSaveClick}>
      <input
        type="text"
        value={updatedTitle}
        id="item"
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button className="btn btn-primary">Save</button>
    </form>
  );
}

export default UpdateForm;
