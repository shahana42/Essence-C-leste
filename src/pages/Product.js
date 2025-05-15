import React, { useEffect } from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import perfume11 from "../Images/perfume11.jpg";
import perfume22 from "../Images/perfume22.jpg";
import perfume33 from "../Images/perfume33.jpg";

const Products = [
  {
    id: 1,
    title: "Perfume 1",
    description:
      "Light and airy with a bouquet of fresh flowers. Light and airy with a bouquet of fresh flowers. Light and airy with a bouquet of fresh flowers.",
    image: perfume11,
  },
  {
    id: 2,
    title: "Perfume 2",
    description:
      "Bold and spicy with a touch of vanilla musk. Bold and spicy with a touch of vanilla musk. Bold and spicy with a touch of vanilla musk.",
    image: perfume22,
  },
  {
    id: 3,
    title: "Perfume 3",
    description:
      "Sweet notes blended with woody undertones. Sweet notes blended with woody undertones. Sweet notes blended with woody undertones.",
    image: perfume33,
  },
];

const ProductImage = ({ image, isEven }) => {
  const imageWrapperStyle = {
    position: "relative",
    width: "260px",
    height: "260px",
  };

  const backBoxStyle = {
    backgroundColor: "#e0d8d3",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    position: "absolute",
    top: "20px",
    [isEven ? "left" : "right"]: "20px",
    zIndex: 1,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    objectFit: "cover",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      style={imageWrapperStyle}
    >
      <div style={backBoxStyle} />
      <img src={image} alt="product" style={imageStyle} />
    </motion.div>
  );
};

const ProductCard = ({ description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
  >
    <Card
      style={{
        maxWidth: "400px",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Card.Meta description={description} />
    </Card>
  </motion.div>
);

const ProductItem = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const containerStyle = {
    display: "flex",
    flexDirection: isEven ? "row-reverse" : "row",
    alignItems: "center",
    padding: "0px 200px",
    margin: "60px 0",
    gap: "40px",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <ProductImage image={product.image} isEven={isEven} />
      <ProductCard description={product.description} />
    </div>
  );
};

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Scroll to top on mount
  }, []);

  return (
    <main style={{ padding: "40px 20px" }}>
      {Products.map((product, index) => (
        <ProductItem key={product.id} product={product} index={index} />
      ))}
    </main>
  );
};

export default Product;
