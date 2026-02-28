import React from "react";


function Products() {
  const products = [
    {
      name: "Hair Serum",
      price: "₹499",
      img: "/images/imgserum5.jpg"
    },
    {
      name: "Face Cream",
      price: "₹699",
      img: "/images/img6.jpg"
    },
    {
      name: "Makeup Kit",
      price: "₹1499",
      img: "/images/img7.jpg"
    },
    {
      name: "Shampoo",
      price: "₹399",
      img: "/images/img8.jpg"
    }
  ];

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <p className="subtitle">Premium beauty products for daily care</p>

      <div className="products-container">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <img src={p.img} alt={p.name} />
            <div className="card-body">
              <h3>{p.name}</h3>
              <h4>{p.price}</h4>
              <div className="btn-group">
                <button className="cart">Add to Cart</button>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
