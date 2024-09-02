import { Col, Divider, Grid, Menu, Row, Layout } from 'antd';
import WhiteLogo from './Icons/WhiteLogo';

const { Footer } = Layout;

const FooterComponent = () => {
  const {useBreakpoint}  = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const WhiteLogoItem = (props) => (
    <WhiteLogo style={{ height: '32px', color: isMobile ? '#A59E9E' : 'rgba(165, 158, 158, 1)' }} {...props} />
  );

  return (
    <Footer style={isMobile ? { background: "#fff", padding: "16px" } : { background: "rgba(255, 255, 255, 1)", padding: "0 50px" }}>
      <Row gutter={[16, 16]} style={isMobile ? {} : { justifyContent: "center" }}>
        <Col span={24} md={12}>
          <WhiteLogoItem />
          <p style={{ fontSize: isMobile ? "12px" : "inherit", color: isMobile ? "#A59E9E" : "inherit" }}>
            Valletta Buildings, South Street, Valletta - VLT 1103 Malta
          </p>
        </Col>
        {isMobile ? (
          <>
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
            <Col span={24}>
              <p style={{ fontSize: "12px", color: "#A59E9E" }}>
                COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
              </p>
            </Col>
          </>
        ) : (
          <>
            <Col span={3}>
              <h3>Web Map</h3>
              {["Home", "Games", "Math", "Company", "Events", "Partners"].map(item => (
                <p key={item}>{item}</p>
              ))}
            </Col>
            <Col span={3}>
              <h3>About Us</h3>
              {[
                "Licensing",
                "Certification",
                "Responsible Gaming",
                "Exhibitions",
                "Copyright Protection",
              ].map(item => (
                <p key={item}>{item}</p>
              ))}
            </Col>
            <Col span={3}>
              <h3>Events</h3>
              {["PG ICE 2017", "PG ICE 2018", "PG ICE 2019", "About ICE"].map(item => (
                <p key={item}>{item}</p>
              ))}
            </Col>
            <Col span={3}>
              <h3>Our Partners</h3>
              {["Relaxing", "Leander Games"].map(item => (
                <p key={item}>{item}</p>
              ))}
            </Col>
            <Col span={12} md={24} style={{ textAlign: 'center' }}>
              <Divider />
              <p>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
            </Col>
          </>
        )}
      </Row>
    </Footer>
  );
};

export default FooterComponent;
