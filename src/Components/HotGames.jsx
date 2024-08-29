import { Button, Card, Carousel, Col, Grid, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";

export default function HotGames() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
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
                        4TECH™ has just launched their very first Mahjong
                        inspired slot machine game…
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
              cover={<img src="content_bandito.png" alt="Wild Bandito" />}
              style={{ maxWidth: "100%", boxShadow: "unset" }}
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
                    <img src="app_mahjong.png" alt="Wild Bandito icon" />
                    <div>
                      <h4 style={{ margin: "unset" }}>Wild Bandito</h4>
                      <p>
                        Millions will be rewarded for the most wanted bandits
                        capture!
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
                        4TECH™ has just launched their very first Mahjong
                        inspired slot machine game…
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
              cover={<img src="content_bandito.png" alt="Wild Bandito" />} // Replace with actual image
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
                    <img src="app_mahjong.png" alt="Wild Bandito icon" />{" "}
                    {/* Icon Image */}
                    <div>
                      <h4 style={{ margin: "unset" }}>Wild Bandito</h4>
                      <p>
                        Millions will be rewarded for the most wanted bandits
                        capture!
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
  );
}
