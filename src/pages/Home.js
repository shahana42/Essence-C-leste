import React from 'react';
// import { Button } from 'antd';
import { motion } from 'framer-motion';
import './Home.css';

import perfume11 from '../Images/perfume11.jpg';
import perfume22 from '../Images/perfume22.jpg';
import perfume33 from '../Images/perfume33.jpg';
import perfume44 from '../Images/perfume44.jpg';


const images = [perfume11, perfume22, perfume33, perfume44]; 

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  return (
    <div className="home-container">
      <div className="image-column">
        {images.slice(0, 2).map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="hero-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 1.0 }}
            variants={fadeIn}
          />
        ))}
      </div>
      <div className="image-column">
        {images.slice(2, 3).map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="hero-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 1.0}}
            variants={fadeIn}
          />
        ))}
      </div>
      <div className="center-content">
        <h1>The Art of Fragrance</h1>
        <p>At <b>Essence Céleste</b>, we believe that fragrance is an invisible accessory that speaks louder than words. Our curated collection of premium perfumes is designed to enhance your personal style, leaving a lasting impression wherever you go. Whether you’re looking for a refreshing citrus burst, a romantic floral bouquet, or a deep, mysterious musky scent, we have something for every personality and occasion.</p>
        {/* <Button type="primary" style={{ background: '#7c4d3f', borderColor: '#7c4d3f' }}>
          Start Your Journey
        </Button> */}
      </div>
      <div className="image-column">
        {images.slice(3,4).map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="hero-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 1.0 }}
            variants={fadeIn}
          />
        ))}
      </div>
      <div className="image-column">
        {images.slice(0,2).map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="hero-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 1.0 }}
            variants={fadeIn}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
