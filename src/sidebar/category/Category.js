import Input from "../../components/Input";
import "./Category.css";

const categoryObj = [
  {
    id: 1,
    label: "All",
    name: "test12",
  },
  {
    id: 2,
    label: "Sneakers",
    name: "test12",
  },
  {
    id: 3,
    label: "Flats",
    name: "test12",
  },
  {
    id: 4,
    label: "Heels",
    name: "test12",
  },
  {
    id: 5,
    label: "Sandals",
    name: "test12",
  },
];

export default function Category() {
  return (
    <div className="category">
      <h2 className="sidebar-title">Category</h2>
      <div>
        {categoryObj.map((item) => {
          const { id, label, name } = item;
          return <Input key={id} label={label} name={name} />;
        })}
      </div>
    </div>
  );
}
