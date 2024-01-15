import "./recommended.css";
import Button from "../components/Button";

const recommendationObj = [
  { id: 1, label: "All Products", value: "all" },
  { id: 2, label: "Nike", value: "nike" },
  { id: 3, label: "Puma", value: "puma" },
  { id: 4, label: "Vans", value: "vans" },
  { id: 5, label: "Addidas", value: "addidas" },
];

function Recommended({ handleClick }) {
  return (
    <>
      <div className="">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {recommendationObj.map((item) => {
            const { id, label, value } = item;
            return (
              <Button
                key={id}
                label={label}
                handleClick={handleClick}
                value={value}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Recommended;
