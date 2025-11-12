import { Layout, Menu, Typography, Avatar } from "antd";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuItem, setMenuItem] = useState(["main"]);
  const menuItems = [
    {
      key: "main",
      label: "Главная",
      onClick: () => {
        setMenuItem(["main"]);
      },
    },
    {
      key: "movies",
      label: "Фильмы",
      onClick: () => {
        setMenuItem(["movies"]);
      },
    },
  ];
  return (
    <Layout.Header className="header-main">
      <Menu
        mode="horizontal"
        selectedKeys={menuItem}
        items={menuItems}
        className="header-menu"
      ></Menu>
      <div className="user-container">
        <Avatar size={"large"}>К</Avatar>
        <div className="user-name-container">
          <Typography.Text>Ксения Ц.</Typography.Text>
          <Typography.Text type={"secondary"}>Критик</Typography.Text>
        </div>
      </div>
    </Layout.Header>
  );
}

export default Header;
