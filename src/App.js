import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          {/* Left: Logo */}
          <div style={{ minWidth: "150px", fontSize: "24px", fontWeight: "bold" }}>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Essence Céleste
            </Link>
          </div>

          {/* Center: Menu */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Menu
              mode="horizontal"
              selectable={false}
              overflowedIndicator={null}
              style={{
                background: "transparent",
                fontWeight: 500,
                display: "flex",
                justifyContent: "center",
                flexWrap: "nowrap",
                gap: "30px", // add space between items
                fontSize: "16px",
              }}
            >
              <Menu.Item key="home">
                <Link to="/" style={{ color: "black" }}>Home</Link>
              </Menu.Item>
              <Menu.Item key="product">
                <Link to="/product" style={{ color: "black" }}>Product</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about" style={{ color: "black" }}>About</Link>
              </Menu.Item>
              <Menu.Item key="contact">
                <Link to="/contact" style={{ color: "black" }}>Contact</Link>
              </Menu.Item>
            </Menu>
          </div>

          {/* Right: Spacer (Smaller) */}
          <div style={{ minWidth: "50px" }} />
        </Header>

        <Content style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
