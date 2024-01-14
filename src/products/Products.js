import "./products.css";
import Card from "../components/Card";

function Products({ products }) {
  return (
    <>
      <section className="card-container">
        {products.map((item, index) => {
          const {
            img,
            title,
            star,
            reviews,
            prevPrice,
            newPrice,
            company,
            color,
            category,
          } = item;
          return (
            <Card
              key={index}
              img={img}
              title={title}
              star={star}
              reviews={reviews}
              prevPrice={prevPrice}
              newPrice={newPrice}
              company={company}
              color={color}
              category={category}
            />
          );
        })}
      </section>
    </>
  );
}

export default Products;
