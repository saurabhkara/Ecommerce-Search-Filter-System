function Input({ label, name }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Input;
