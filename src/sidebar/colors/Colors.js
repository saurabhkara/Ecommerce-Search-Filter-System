import Input from "../../components/Input";
import "./Colors.css";

const colorsObj = [
  { id: 1, label: "All", name: "test65", value: "" },
  { id: 2, label: "White", name: "test65", value: "white" },
  { id: 3, label: "Black", name: "test65", value: "black" },
  { id: 4, label: "Blue", name: "test65", value: "blue" },
  { id: 5, label: "Green", name: "test65", value: "green" },
  { id: 6, label: "Red", name: "test65", value: "red" },
];

export default function Colors({ handleChange }) {
  return (
    <div className="color-container">
      <h2 className="sidebar-title color-title">Colors</h2>
      {colorsObj.map((item) => {
        const { id, label, value } = item;
        return (
          <Input
            key={id}
            label={label}
            handleChange={handleChange}
            value={value}
          />
        );
      })}
    </div>
  );
}
