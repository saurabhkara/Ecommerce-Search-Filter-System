function Button({ label, handleClick }) {
  const handleOnClick = () => {
    handleClick(label);
  };
  return (
    <button className="btns" onClick={handleClick} value={label}>
      {label}
    </button>
  );
}

export default Button;
