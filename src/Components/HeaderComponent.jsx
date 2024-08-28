import Icon from '@ant-design/icons/lib/components/Icon';
import { Header } from 'antd/es/layout/layout'
import  { useState } from 'react'
import WhiteLogo from './Icons/WhiteLogo';
import { Button, Drawer, Grid, Menu } from 'antd';

export default function HeaderComponent() {
  const WhiteLogoItem = (props) => <Icon component={WhiteLogo} {...props} />;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

  const listMenu = [
    { id: 1, title: "Home" },
    { id: 2, title: "Games" },
    { id: 3, title: "News" },
    { id: 4, title: "Math" },
    { id: 5, title: "Company" },
    { id: 6, title: "Events" },
    { id: 7, title: "Partners" },
  ];

  const menuItem = listMenu.map((item) => ({
    key: item.id.toString(),
    label: item.title.toUpperCase(),
  }));

  return (
    <Header
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",
          zIndex: 1,
          justifyContent: "space-between",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "0 16px",
        }}
      >
        <WhiteLogoItem />
        {isMobile ? (
          <>
            <Button type="text" style={{ color: "#fff" }} onClick={showDrawer}>
              Menu
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={drawerVisible}
            >
              <Menu mode="inline" theme="light" items={menuItem} />
            </Drawer>
          </>
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ backgroundColor: "transparent" }}
            items={menuItem}
          />
        )}
      </Header>
  )
}
