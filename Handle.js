import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from "./img.png";

function AutoLayoutSizingExample() {
    const handleOne = [
        { Pair: "Pair", Price: "Price", Charge: "Charge" },
        { Pair: "ADA/BTC", Price: "0.00067", Charge: "+2.09%" },
        { Pair: "ADA/BTC", Price: "0.00067", Charge: "+2.09%" },
        { Pair: "ADA/BTC", Price: "0.00067", Charge: "+2.09%" },
        { Pair: "ADA/BTC", Price: "0.00067", Charge: "+2.09%" },
        { Pair: "ADA/BTC", Price: "0.00067", Charge: "+2.09%" },
    ];

    const handleTwo = [
        { Price: "Price (BTC)", Amount: "Amount (BTC)", Total: "Total (BTC)" },
        { Price: "1,989,000", Amount: "9,000", Total: "9000" },
        { Price: "1,989,000", Amount: "9,000", Total: "9000" },
        { Price: "1,989,000", Amount: "9,000", Total: "9000" },
        { Price: "1,989,000", Amount: "9,000", Total: "9000" },
        { Price: "1,989,000", Amount: "9,000", Total: "9000" },
    ];

    return (
        <Container fluid className='p-3 handle full-width-container'>
            <Row>
                <Col xs={12} md={4} className='handle'>
                    <div className='handle-1'>
                        {handleOne.map((item, index) => (
                            <div className="d-flex" key={index}>  
                                <div style={{ flex: 1 }}>
                                    <p>{item.Pair}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p>{item.Price}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p>{item.Charge}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col xs={12} md={4} className='handle'>
                    <div>
                        <img
                            src={Img}
                            className="img-fluid rounded-top"
                            alt="Trading Example"
                        />
                    </div>
                </Col>
                <Col xs={12} md={4} className='handle-2'>
                    <div>
                        {handleTwo.map((item, index) => (
                            <div className="d-flex" key={index}>
                                <div style={{ flex: 1 }}>
                                    <p>{item.Price}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p>{item.Amount}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p>{item.Total}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutSizingExample;
