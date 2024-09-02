import Icon from "@ant-design/icons";
import {
  Col,
  Divider,
  Grid,
  Input,
  Layout,
  Menu,
  Row,
} from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SideMenuHome from "./Components/Icons/SideMenuHome";
import SideMenuTimeLine from "./Components/Icons/SideMenuTimeLine";
import SideMenuAllGames from "./Components/Icons/SideMenuAllGames";
import { lazy } from "react";

const HeaderComponent = lazy(() => import("./Components/HeaderComponent"))
const HotGames = lazy(() => import('./Components/HotGames'))
const HottesCategory = lazy(() => import('./Components/HottesCategory'))
const FooterComponent =lazy(() =>  import('./Components/FooterComponent'))

const { useBreakpoint } = Grid;

function App() {
  const SideMenuHomeItem = (props) => (
    <Icon component={SideMenuHome} {...props} />
  );
  const SideMenuTimeLineItem = (props) => (
    <Icon component={SideMenuTimeLine} {...props} />
  );
  const SideMenuAllGamesItem = (props) => (
    <Icon component={SideMenuAllGames} {...props} />
  );
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  

  const listSideMenu = [
    { key: 1, icon: <SideMenuHomeItem />, label: "Games Home" },
    { key: 2, icon: <SideMenuTimeLineItem />, label: "Timelines" },
    { key: 3, icon: <SideMenuAllGamesItem />, label: "All games" },
  ];

  return (
    <Layout>
      {/* Header */}
      <HeaderComponent/>

      <Content
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src="Container.jpg"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Content>

      {/* Body */}
      <Layout
        style={{
          padding: isMobile ? "24px 16px" : "24px 50px",
          backgroundColor: "#ffffff",
          justifyContent: "space-around",
        }}
      >
        <Row gutter={[16, 16]} style={{ justifyContent: "space-between" }}>
          {!isMobile && (
            <Col xs={24} md={6}>
              <Sider
                width="100%"
                style={{
                  background: "#ffffff",
                }}
              >
                <Input
                  placeholder="Search"
                  style={{
                    borderLeft: "unset",
                    borderRight: "unset",
                    borderTop: "unset",
                    borderRadius: "unset",
                  }}
                />
                <Menu
                  mode="vertical"
                  defaultSelectedKeys={["0"]}
                  items={listSideMenu}
                  theme="light"
                  style={{ border: "unset" }}
                />
              </Sider>
            </Col>
          )}
          <Col xs={24} md={18}>
            <HotGames />
            <HottesCategory />
          </Col>
        </Row>
      </Layout>
      <Divider
        style={{
          margin: "unset",
        }}
      />

      {/* Footer */}
      <FooterComponent />
    </Layout>
  );
}

export default App;
