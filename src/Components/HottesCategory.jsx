import Icon from "@ant-design/icons/lib/components/Icon";
import { Card, Carousel, Col, Grid, Row } from "antd";
import Meta from "antd/es/card/Meta";
import MusicIcon from "./Icons/MusicIcon";
import PokerIcon from "./Icons/PokerIcon";
import { Content } from "antd/es/layout/layout";
import './Carousel.css';

export default function HottesCategory() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const PokerIconItem = (props) => <Icon component={PokerIcon} {...props} />;
  const MusicIconItem = (props) => <Icon component={MusicIcon} {...props} />;

  const cardContent = (bgColor, icon, title, description, images, mainImage) => (
    <Card style={{ background: "rgba(0, 0, 0, 0.05)" }}>
      <Meta
        description={
          <Row style={{ display: "flex" }}>
            <Col span={12}>
              <div>
                <div
                  style={{
                    background: bgColor,
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "21px",
                    maxWidth: isMobile ? '167px' : '210px',
                    height: isMobile ? '167px' : '210px'
                  }}
                >
                  {icon}
                  <h3 style={{ color: "#ffff", margin: "unset" }}>{title}</h3>
                  <p style={{ color: "#ffff" }}>{description}</p>
                </div>
                <div style={{ display: "flex", maxidth: "210px", gap: "20px" }}>
                  <img src={images[0]} style={{ width: isMobile ? "75px" : "82px", height: isMobile ? "75px" : "82px" }} />
                  <img src={images[1]} style={{ width: isMobile ? "75px" : "82px", height: isMobile ? "75px" : "82px" }} />
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
                  <img src={images[2]} style={{ width: isMobile ? "75px" : "82px", height: isMobile ? "75px" : "82px" }} />
                  <img src={images[3]} style={{ width: isMobile ? "75px" : "82px", height: isMobile ? "75px" : "82px" }} />
                </div>
                <img src={mainImage} style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        }
      />
    </Card>
  );

  return (
    <Content>
      <Row style={{ marginTop: "21px", marginBottom: "21px" }}>
        <h2 style={{ margin: "unset" }}>Hottest Category</h2>
      </Row>
      {isMobile ? (
        <Carousel>
          <div>
            {cardContent(
              "#6962f8",
              <MusicIconItem />,
              "Music",
              "Music makes everything better, and these games will prove it.",
              ["app_icon_01.jpg", "app_icon_02.jpg", "app_icon_03.jpg", "app_icon_04.jpg"],
              "Music_pic.jpg"
            )}
          </div>
          <div>
            {cardContent(
              "#09796a",
              <PokerIconItem />,
              "Table Games",
              "The classic table games for the gentlemen and ladies",
              ["app_icon_01.jpg", "app_icon_02.jpg", "app_icon_03.jpg", "app_icon_04.jpg"],
              "3d-pocker_pic.png"
            )}
          </div>
        </Carousel>
      ) : (
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            {cardContent(
              "#6962f8",
              <MusicIconItem />,
              "Music",
              "Music makes everything better, and these games will prove it.",
              ["app_icon_01.jpg", "app_icon_02.jpg", "app_icon_03.jpg", "app_icon_04.jpg"],
              "Music_pic.jpg"
            )}
          </Col>
          <Col xs={24} sm={12}>
            {cardContent(
              "#09796a",
              <PokerIconItem />,
              "Table Games",
              "The classic table games for the gentlemen and ladies",
              ["app_icon_01.jpg", "app_icon_02.jpg", "app_icon_03.jpg", "app_icon_04.jpg"],
              "3d-pocker_pic.png"
            )}
          </Col>
        </Row>
      )}
    </Content>
  );
}
