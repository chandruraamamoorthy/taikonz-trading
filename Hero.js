import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function ContainerExample() {
    const heroData = [
        {
            title: "24 charge",
            data: "-998.33-1.33%"
        },
        {
            title: "24 High",
            data: "43,3498.0"
        },
        {
            title: "24 Low",
            data: "43,3498.0"
        },
        {
            title: "24 Volume (BTC)",
            data: "43,3498.0"
        },
        {
            title: "24 Volume (USDT)",
            data: "43,3498.0"
        }
    ];

    return (
        <Container fluid className="full-width-container hero">
            <Row>
                <Col>
                    <div className='d-flex justify-content-between hero-data-container hero'>
                        {heroData.map((item, index) => (
                            <div className='hero-data-item' key={index}>  
                                <p className="hero-title">{item.title}</p>
                                <p className="hero-data">{item.data}</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContainerExample;
