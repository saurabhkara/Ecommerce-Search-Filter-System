import "./Price.css";
import "../category/Category.css";
import Input from "../../components/Input";

const priceObj = [
  { id: 1, label: "All", name: "test32" },
  { id: 2, label: "$0 - $50", name: "test32" },
  { id: 3, label: "$50 - $100", name: "test32" },
  { id: 4, label: "Over $150", name: "test32" },
];

export default function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {priceObj.map((item) => {
        const { id, label } = item;
        return <Input key={id} label={label} />;
      })}
    </div>
  );
}
