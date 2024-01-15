import Input from "../../components/Input";
import "./Category.css";

const categoryObj = [
  {
    id: 1,
    label: "All",
    name: "test12",
    value: "",
  },
  {
    id: 2,
    label: "Sneakers",
    name: "test12",
    value: "sneakers",
  },
  {
    id: 3,
    label: "Flats",
    name: "test12",
    value: "flats",
  },
  {
    id: 4,
    label: "Heels",
    name: "test12",
    value: "heels",
  },
  {
    id: 5,
    label: "Sandals",
    name: "test12",
    value: "sandals",
  },
];

export default function Category({ handleChange }) {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div>
        {categoryObj.map((item) => {
          const { id, label, value } = item;
          return (
            <Input
              key={id}
              label={label}
              value={value}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
