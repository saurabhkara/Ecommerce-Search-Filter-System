function Button({ label, handleClick, value }) {
  return (
    <button className="btns" onClick={handleClick} value={value}>
      {label}
    </button>
  );
}

export default Button;
