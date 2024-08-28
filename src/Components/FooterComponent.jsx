import Icon from '@ant-design/icons/lib/components/Icon';
import { Col, Divider, Grid, Menu, Row } from 'antd';
import WhiteLogo from './Icons/WhiteLogo';
import { Footer } from 'antd/es/layout/layout';

export default function FooterComponent() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const WhiteLogoItem = (props) => <Icon component={WhiteLogo} {...props} />;

  return (
    <>
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
    </>
  )
}
