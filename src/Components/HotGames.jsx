import { Button, Card, Carousel, Col, Grid, Row, Layout } from 'antd';
import Meta from 'antd/es/card/Meta';

const { Content } = Layout;

const gameData = [
  {
    title: 'Mahjong Ways',
    description: '4TECH™ has just launched their very first Mahjong inspired slot machine game…',
    cover: 'content_mahjong.png',
    icon: 'app_mahjong.png',
  },
  {
    title: 'Wild Bandito',
    description: 'Millions will be rewarded for the most wanted bandits capture!',
    cover: 'content_bandito.png',
    icon: 'app_mahjong.png', 
  },
];

const renderCardContent = (game) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '17px',
    }}
  >
    <img src={game.icon} alt={`${game.title} icon`} />
    <div>
      <h4 style={{ margin: 0 }}>{game.title}</h4>
      <p>{game.description}</p>
    </div>
    <Button>View</Button>
  </div>
);

const HotGames = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Content>
      <Row style={{ marginBottom: '21px' }}>
        <h2 style={{ margin: 0 }}>Hot Games</h2>
      </Row>
      {isMobile ? (
        <Carousel arrows={true} dots={true} dotPosition="bottom">
          {gameData.map((game, index) => (
            <div key={index}>
              <Card
                bordered={false}
                cover={<img src={game.cover} alt={game.title} />}
                style={{ maxWidth: '100%' }}
              >
                <Meta description={renderCardContent(game)} />
              </Card>
            </div>
          ))}
        </Carousel>
      ) : (
        <Row gutter={[16, 16]}>
          {gameData.map((game, index) => (
            <Col xs={24} sm={12} key={index}>
              <Card
                bordered={false}
                cover={<img src={game.cover} alt={game.title} />}
                style={{ maxWidth: '100%' }}
              >
                <Meta description={renderCardContent(game)} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Content>
  );
};

export default HotGames;
