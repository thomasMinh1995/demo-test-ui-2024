import Icon from "@ant-design/icons";
import {
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Drawer,
  Grid,
  Input,
  Layout,
  Menu,
  Row,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import WhiteLogo from "./Components/Icons/WhiteLogo";
import Sider from "antd/es/layout/Sider";
import SideMenuHome from "./Components/Icons/SideMenuHome";
import SideMenuTimeLine from "./Components/Icons/SideMenuTimeLine";
import SideMenuAllGames from "./Components/Icons/SideMenuAllGames";
import MusicIcon from "./Components/Icons/MusicIcon";
import PokerIcon from "./Components/Icons/PokerIcon";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

const { useBreakpoint } = Grid;

function App() {
  const WhiteLogoItem = (props) => <Icon component={WhiteLogo} {...props} />;
  const SideMenuHomeItem = (props) => (
    <Icon component={SideMenuHome} {...props} />
  );
  const SideMenuTimeLineItem = (props) => (
    <Icon component={SideMenuTimeLine} {...props} />
  );
  const SideMenuAllGamesItem = (props) => (
    <Icon component={SideMenuAllGames} {...props} />
  );
  const PokerIconItem = (props) => <Icon component={PokerIcon} {...props} />;

  const MusicIconItem = (props) => <Icon component={MusicIcon} {...props} />;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => setDrawerVisible(true);
  const onClose = () => setDrawerVisible(false);

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
            <Content>
              <Row style={{ marginBottom: "21px" }}>
                <h2 style={{ margin: "unset" }}>Hot Games</h2>
              </Row>
              {isMobile ? (
                <Carousel>
                  <div>
                    <Card
                      bordered={false}
                      cover={<img src="content_mahjong.png" alt="Mahjong" />}
                      style={{ maxWidth: "100%" }}
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
                            <img src="app_mahjong.png" alt="Mahjong icon" />
                            <div>
                              <h4 style={{ margin: "unset" }}>Mahjong Ways</h4>
                              <p>
                                4TECH™ has just launched their very first
                                Mahjong inspired slot machine game…
                              </p>
                            </div>
                            <Button>View</Button>
                          </div>
                        }
                      />
                    </Card>
                  </div>
                  <div>
                    <Card
                      bordered={false}
                      cover={
                        <img src="content_bandito.png" alt="Wild Bandito" />
                      }
                      style={{ maxWidth: "100%" }}
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
                            <img
                              src="app_mahjong.png"
                              alt="Wild Bandito icon"
                            />
                            <div>
                              <h4 style={{ margin: "unset" }}>Wild Bandito</h4>
                              <p>
                                Millions will be rewarded for the most wanted
                                bandits capture!
                              </p>
                            </div>
                            <Button>View</Button>
                          </div>
                        }
                      />
                    </Card>
                  </div>
                </Carousel>
              ) : (
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Card
                      bordered={false}
                      cover={<img src="content_mahjong.png" alt="Mahjong" />} // Replace with actual image
                      style={{ maxWidth: "100%" }}
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
                            <img src="app_mahjong.png" alt="Mahjong icon" />{" "}
                            {/* Icon Image */}
                            <div>
                              <h4 style={{ margin: "unset" }}>Mahjong Ways</h4>
                              <p>
                                4TECH™ has just launched their very first
                                Mahjong inspired slot machine game…
                              </p>
                            </div>
                            <Button>View</Button>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Card
                      bordered={false}
                      cover={
                        <img src="content_bandito.png" alt="Wild Bandito" />
                      } // Replace with actual image
                      style={{ maxWidth: "100%" }}
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
                            <img
                              src="app_mahjong.png"
                              alt="Wild Bandito icon"
                            />{" "}
                            {/* Icon Image */}
                            <div>
                              <h4 style={{ margin: "unset" }}>Wild Bandito</h4>
                              <p>
                                Millions will be rewarded for the most wanted
                                bandits capture!
                              </p>
                            </div>
                            <Button>View</Button>
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
              )}
            </Content>
            <Content>
              <Row style={{ marginTop: "21px", marginBottom: "21px" }}>
                <h2 style={{ margin: "unset" }}>Hottest Category</h2>
              </Row>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <Card
                    style={{
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Meta
                      description={
                        <Row style={{ display: "flex" }}>
                          <Col span={12}>
                            <div>
                              <div
                                style={{
                                  background: "#6962f8",
                                  borderRadius: "10px",
                                  padding: "15px",
                                  marginBottom: "21px",
                                }}
                              >
                                <MusicIconItem />
                                <h3
                                  style={{
                                    color: "#ffff",
                                    margin: "unset",
                                  }}
                                >
                                  Music
                                </h3>
                                <p
                                  style={{
                                    color: "#ffff",
                                  }}
                                >
                                  Music makes everything better, and these games
                                  will prove it.
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "210px",
                                  gap: "20px",
                                }}
                              >
                                <img
                                  src="app_icon_01.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                                <img
                                  src="app_icon_02.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                              </div>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "210px",
                                  gap: "20px",
                                  marginBottom: "21px",
                                }}
                              >
                                <img
                                  src="app_icon_03.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                                <img
                                  src="app_icon_04.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                              </div>
                              <img
                                src="Music_pic.jpg"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      }
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12}>
                  <Card
                    style={{
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Meta
                      description={
                        <Row style={{ display: "flex" }}>
                          <Col span={12}>
                            <div>
                              <div
                                style={{
                                  background: "#09796a",
                                  borderRadius: "10px",
                                  padding: "15px",
                                  marginBottom: "21px",
                                }}
                              >
                                <PokerIconItem />
                                <h3
                                  style={{
                                    color: "#ffff",
                                    margin: "unset",
                                  }}
                                >
                                  Table Games
                                </h3>
                                <p
                                  style={{
                                    color: "#ffff",
                                  }}
                                >
                                  The classic table games for the gentlement and
                                  ladies
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "210px",
                                  gap: "20px",
                                }}
                              >
                                <img
                                  src="app_icon_01.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                                <img
                                  src="app_icon_02.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                              </div>
                            </div>
                          </Col>
                          <Col span={12}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  width: "210px",
                                  gap: "20px",
                                  marginBottom: "21px",
                                }}
                              >
                                <img
                                  src="app_icon_03.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                                <img
                                  src="app_icon_04.jpg"
                                  style={{ width: "82px", height: "82px" }}
                                />
                              </div>
                              <img
                                src="Music_pic.jpg"
                                style={{ width: "100%" }}
                              />
                            </div>
                          </Col>
                        </Row>
                      }
                    />
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
