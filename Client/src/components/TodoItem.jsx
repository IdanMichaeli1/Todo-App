function TodoItem({ title, id, checked, toggleChecked, removeItem }) {
  return (
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
    </li>
  );
}

export default TodoItem;
