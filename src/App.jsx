import Icon from "@ant-design/icons";
import { Button, Card, Col, Divider, Grid, Input, Layout, Menu, Row  } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import WhiteLogo from "./Components/Icons/WhiteLogo";
import Sider from "antd/es/layout/Sider";
import SideMenuHome from "./Components/Icons/SideMenuHome";
import SideMenuTimeLine from "./Components/Icons/SideMenuTimeLine";
import SideMenuAllGames from "./Components/Icons/SideMenuAllGames";
import Meta from "antd/es/card/Meta";

const { useBreakpoint } = Grid;


function App() {
  const WhiteLogoItem = (props) => <Icon component={WhiteLogo} {...props} />;
  const SideMenuHomeItem = (props) => <Icon component={SideMenuHome} {...props} />;
  const SideMenuTimeLineItem = (props) => <Icon component={SideMenuTimeLine} {...props} />;
  const SideMenuAllGamesItem = (props) => <Icon component={SideMenuAllGames} {...props} />;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const listSideMenu = [
    { key: 1, icon: <SideMenuHomeItem />, label: "Games Home" },
    { key: 2, icon: <SideMenuTimeLineItem />, label: "Timelines" },
    { key: 3, icon: <SideMenuAllGamesItem />, label: "All games" },
  ];

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
    <Layout>
      {/* Header */}
      <Header
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",
          zIndex: 1,
          justifyContent: "space-between",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <WhiteLogoItem />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "transparent" }}
          items={menuItem}
        />
      </Header>

      {/* Carousel */}
      <Content
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src="Container.jpg" // Replace with the appropriate image path
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Content>

      {/* Body */}
      <Layout
        style={{
          padding: "24px 50px",
          backgroundColor: "#ffffff",
          justifyContent: "space-around",
        }}
      >
        <Row gutter={[16, 16]} style={{ justifyContent: "space-between" }}>
          <Col span={6}>
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

          <Col span={18}>
            <Content>
              <Row>
                <h2 style={{ margin: "unset" }}>Hot Games</h2>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card
                    bordered={false}
                    cover={<img src="content_mahjong.png" alt="Mahjong" />} // Replace with actual image
                    style={{ maxWidth: "490px" }}
                  >
                    <Meta
                      description={
                        <div
                           style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "17px",
                          }}
                        >
                          <img src="app_mahjong.png" alt="Mahjong icon" /> {/* Icon Image */}
                          <div>
                            <h4 style={{ margin: "unset" }}>Mahjong Ways</h4>
                            <p>
                              4TECH™ has just launched their very first Mahjong inspired slot machine game…
                            </p>
                          </div>
                          <Button>View</Button>
                        </div>
                      }
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    bordered={false}
                    cover={<img src="content_bandito.png" alt="Wild Bandito" />} // Replace with actual image
                    style={{ maxWidth: "490px" }}
                  >
                    <Meta
                      description={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "17px",
                          }}
                        >
                          <img src="app_mahjong.png" alt="Wild Bandito icon" /> {/* Icon Image */}
                          <div>
                            <h4 style={{ margin: "unset" }}>Wild Bandito</h4>
                            <p>
                              Millions will be rewarded for the most wanted bandits capture!
                            </p>
                          </div>
                          <Button>View</Button>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              </Row>
            </Content>

            <Content>
              <Row>
                <h2 style={{ margin: "unset" }}>Hottest Category</h2>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card
                    style={{
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <h3>Music</h3>
                    <p>Music makes everything better, and these games will prove it.</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    style={{
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <h3>Table Games</h3>
                    <p>The classic table games for gentlemen and ladies.</p>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Col>
        </Row>
      </Layout>
      <Divider
        style={{
          margin: "unset",
        }}
      />

      {/* Footer */}
      {isMobile ? (
        <Footer style={{ background: "#fff", padding: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <WhiteLogoItem style={{ color: "#A59E9E", height: "32px" }} />
              <p style={{ fontSize: "12px", color: "#A59E9E" }}>
                Valletta Buildings, South Street, Valletta - VLT 1103 Malta
              </p>
              <p style={{ fontSize: "12px", color: "#A59E9E" }}>
                COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
              </p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Menu
                mode="vertical"
                theme="light"
                style={{ border: "unset", textAlign: "center" }}
                items={[
                  { key: 1, label: "Web Map" },
                  { key: 2, label: "About Us" },
                  { key: 3, label: "Events" },
                  { key: 4, label: "Our Partners" },
                ]}
              />
            </Col>
          </Row>
        </Footer>
      ) : (
        <Footer
          style={{
            background: "rgba(255, 255, 255, 1)",
            width: "100%",
            padding: "0 50px",
          }}
        >
          <Row gutter={[16, 16]} style={{ justifyContent: "center" }}>
            <Col span={12}>
              <WhiteLogoItem
                style={{
                  stroke: "rgba(165, 158, 158, 1)",
                }}
              />
              <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
            </Col>
            <Col span={3}>
              <h3>Web Map</h3>
              {["Home", "Games", "Math", "Company", "Events", "Partners"].map(
                (item) => (
                  <p key={item}>{item}</p>
                )
              )}
            </Col>
            <Col span={3}>
              <h3>About Us</h3>
              {[
                "Licensing",
                "Certification",
                "Responsible Gaming",
                "Exhibitions",
                "Copyright Protection",
              ].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Col>
            <Col span={3}>
              <h3>Events</h3>
              {["PG ICE 2017", "PG ICE 2018", "PG ICE 2019", "About ICE"].map(
                (item) => (
                  <p key={item}>{item}</p>
                )
              )}
            </Col>
            <Col span={3}>
              <h3>Our Partners</h3>
              {["Relaxing", "Leander Games"].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Col>
          </Row>
          <Divider />
          <Row>
            <p>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
          </Row>
        </Footer>
      )}
    </Layout>
  );
}

export default App;
