import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const { Header, Content } = Layout;

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = (
    <>
      <Menu.Item key="home" onClick={closeDrawer}>
        <Link to="/" style={{ color: "black" }}>Home</Link>
      </Menu.Item>
      <Menu.Item key="product" onClick={closeDrawer}>
        <Link to="/product" style={{ color: "black" }}>Product</Link>
      </Menu.Item>
      <Menu.Item key="about" onClick={closeDrawer}>
        <Link to="/about" style={{ color: "black" }}>About</Link>
      </Menu.Item>
      {/* <Menu.Item key="blog" onClick={closeDrawer}>
        <Link to="/blog" style={{ color: "black" }}>Blog</Link>
      </Menu.Item> */}
      <Menu.Item key="contact" onClick={closeDrawer}>
        <Link to="/contact" style={{ color: "black" }}>Contact</Link>
      </Menu.Item>
    </>
  );

  return (
    <Router>
      <Layout>
        <Header className="custom-header" style={{ background: "#ffffff" }}>
          {/* Logo - always visible */}
          <div className="logo">
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Essence Céleste
            </Link>
          </div>

          {/* Desktop menu - hidden on mobile */}
          <div className="menu-center">
            <Menu
              mode="horizontal"
              selectable={false}
              style={{
                background: "transparent",
                borderBottom: "none",
                lineHeight: "64px",
                width: "100%",
                justifyContent: "center"
              }}
            >
              {menuItems}
            </Menu>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <div className="menu-toggle">
            <Button
              icon={<MenuOutlined />}
              type="text"
              onClick={showDrawer}
              style={{ fontSize: "20px", color: "black" }}
            />
          </div>

          {/* Mobile drawer menu */}
          <Drawer
            title="Essence Céleste"
            placement="right"
            onClose={closeDrawer}
            open={drawerVisible}
            width={250}
          >
            <Menu mode="vertical" selectable={false}>
              {menuItems}
            </Menu>
          </Drawer>
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

// CSS Styles
const styles = `
  .custom-header {
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    height: 64px;
    z-index: 1;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    white-space: nowrap;
  }

  .menu-center {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .menu-center .ant-menu-item {
    padding: 0 15px;
    margin: 0 !important;
  }

  .menu-center .ant-menu-item a {
    color: #000000 !important;
    font-weight: 500;
    text-decoration: none;
  }

  .menu-center .ant-menu-item a:hover {
    color: #1890ff !important;
  }

  .menu-toggle {
    display: none;
  }

  /* Responsive behavior */
  @media (max-width: 768px) {
    .menu-center {
      display: none !important;
    }

    .menu-toggle {
      display: block !important;
    }
  }
`;

// Inject styles
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);