import Icon from "@ant-design/icons/lib/components/Icon";
import { Card, Col, Row, Carousel, Grid } from "antd";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";
import MusicIcon from "./Icons/MusicIcon";
import PokerIcon from "./Icons/PokerIcon";

export default function HottesCategory() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const PokerIconItem = (props) => <Icon component={PokerIcon} {...props} />;
  const MusicIconItem = (props) => <Icon component={MusicIcon} {...props} />;

  const renderCardContent = (title, description, icon, images) => (
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
            <h3 style={{ color: "#ffff", margin: "unset" }}>{title}</h3>
            <p style={{ color: "#ffff" }}>{description}</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "210px",
              gap: "20px",
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                style={{ width: "82px", height: "82px" }}
              />
            ))}
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
            {images.map((src, index) => (
              <img
                key={index + 2}
                src={src}
                style={{ width: "82px", height: "82px" }}
              />
            ))}
          </div>
          <img src="Music_pic.jpg" style={{ width: "100%" }} />
        </div>
      </Col>
    </Row>
  );

  return (
    <Content>
      <Row style={{ marginTop: "21px", marginBottom: "21px" }}>
        <h2 style={{ margin: "unset" }}>Hottest Category</h2>
      </Row>
      <Row gutter={[16, 16]}>
        {isMobile ? (
          <Col xs={24}>
            <Carousel>
              <div>
                <Card style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                  <Meta
                    description={renderCardContent(
                      "Music",
                      "Music makes everything better, and these games will prove it.",
                      MusicIconItem,
                      [
                        "app_icon_01.jpg",
                        "app_icon_02.jpg",
                      ]
                    )}
                  />
                </Card>
              </div>
              <div>
                <Card style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                  <Meta
                    description={renderCardContent(
                      "Table Games",
                      "The classic table games for the gentlemen and ladies.",
                      PokerIconItem,
                      [
                        "app_icon_03.jpg",
                        "app_icon_04.jpg",
                      ]
                    )}
                  />
                </Card>
              </div>
            </Carousel>
          </Col>
        ) : (
          <>
            <Col xs={24} sm={12}>
              <Card style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                <Meta
                  description={renderCardContent(
                    "Music",
                    "Music makes everything better, and these games will prove it.",
                    MusicIconItem,
                    [
                      "app_icon_01.jpg",
                      "app_icon_02.jpg",
                    ]
                  )}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                <Meta
                  description={renderCardContent(
                    "Table Games",
                    "The classic table games for the gentlemen and ladies.",
                    PokerIconItem,
                    [
                      "app_icon_03.jpg",
                      "app_icon_04.jpg",
                    ]
                  )}
                />
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Content>
  );
}
