import "./recommended.css";
import Button from "../components/Button";

const recommendationObj = [
  { id: 1, label: "All Products" },
  { id: 2, label: "Nike" },
  { id: 3, label: "Puma" },
  { id: 4, label: "Vans" },
  { id: 5, label: "Addidas" },
];

function Recommended() {
  return (
    <>
      <div className="">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {recommendationObj.map((item) => {
            const { id, label } = item;
            return <Button key={id} label={label} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Recommended;
