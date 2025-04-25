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
            padding: "0 40px",
          }}
        >
          {/* Left: Logo */}
          <div style={{ width: "200px", fontSize: "24px", fontWeight: "bold" }}>
            <Link to="/" style={{ color: "black" }}>
              Essence Céleste
            </Link>
          </div>

          {/* Center: Menu */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Menu
              mode="horizontal"
              selectable={false}
              style={{ background: "transparent" }}
            >
              <Menu.Item key="home">
                <span onClick={() => (window.location.href = "/")}>Home</span>
              </Menu.Item>
              <Menu.Item key="product">
                <span onClick={() => (window.location.href = "/product")}>
                  Product
                </span>
              </Menu.Item>
              <Menu.Item key="about">
                <span onClick={() => (window.location.href = "/about")}>
                  About
                </span>
              </Menu.Item>
              {/* <Menu.Item key="blog">
                <span onClick={() => (window.location.href = "/blog")}>
                  Blog
                </span>
              </Menu.Item> */}
              <Menu.Item key="contact">
                <span onClick={() => (window.location.href = "/contact")}>
                  Contact
                </span>
              </Menu.Item>
            </Menu>
          </div>

          {/* Right: Spacer (can be used later for profile/cart/etc) */}
          <div style={{ width: "200px" }} />
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
