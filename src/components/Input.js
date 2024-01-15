function Input({ label, handleChange, value }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={"test"} value={value} onChange={handleChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Input;
