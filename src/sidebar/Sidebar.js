import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

function Sidebar({ handleChange }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <div className="scroll">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Sidebar;
