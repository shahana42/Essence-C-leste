import React from "react";
import { Typography, Divider } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: "0 20px" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <Title level={1} style={{ textAlign: "center", fontFamily: "'Whisper', cursive", }}>
          About Essence Céleste
        </Title>
        <Divider />
        <Paragraph style={{ fontSize: "16px", lineHeight: 1.8, fontFamily: "'Whisper', cursive", }}>
          At <strong>Essence Céleste</strong>, we believe that fragrance is more than a scent—it's a story, a memory, an emotion. Our carefully crafted perfumes are inspired by the elegance of nature and the sophistication of timeless beauty. Whether you're searching for a bold signature aroma or a delicate everyday companion, our collection speaks to every personality and moment.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", lineHeight: 1.8, fontFamily: "'Whisper', cursive", }}>
          Our mission is to create perfumes that not only smell divine but also evoke confidence, charm, and individuality. With premium ingredients sourced from around the world and a passion for perfection, we invite you to discover the art of true fragrance with us.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", lineHeight: 1.8, fontFamily: "'Whisper', cursive", }}>
          Welcome to the world of <em>Essence Céleste</em> — where elegance meets identity.
        </Paragraph>
      </motion.div>
    </div>
  );
};

export default About;
