function Input({ label }) {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={"test"} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Input;
