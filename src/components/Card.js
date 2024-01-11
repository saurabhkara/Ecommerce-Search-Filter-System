import { MdStar } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";

function Card({ img, title, prevPrice, newPrice, star }) {
  return (
    <section className="card">
      <img src={img} alt="shoes" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-review">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>
            {newPrice}
          </div>
          <div className="bag">
            <BsBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
