import Input from "../../components/Input";
import "./Colors.css";

const colorsObj = [
  { id: 1, label: "All", name: "test65" },
  { id: 2, label: "White", name: "test65" },
  { id: 3, label: "Black", name: "test65" },
  { id: 4, label: "Blue", name: "test65" },
  { id: 5, label: "Green", name: "test65" },
  { id: 6, label: "Red", name: "test65" },
];

export default function Colors() {
  return (
    <div className="color-container">
      <h2 className="sidebar-title color-title">Colors</h2>
      {colorsObj.map((item) => {
        const { id, label, name } = item;
        return <Input key={id} label={label} name={name} />;
      })}
    </div>
  );
}
