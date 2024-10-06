import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ResponsiveAutoExample() {
    const tableData = [
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
        {
            Date: "2024-10-06",
            Pair: "ADA/BTC",
            Price: "0.00067",
            Side: "Sell",
            Type: "Limit",
            Amount: "150",
            Total: "0.1005 BTC",
            Cancel: "-"
        },
    ];

    return (
        <Container fluid className="bottom">
            <Row>
                <Col sm={4}>
                    <div>
                        <Form className="bottom-form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="USDT" className="input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" placeholder="BTC" className="input" />
                                <div className="group">
                                    <div className="group-item">25%</div>
                                    <div className="group-item">50%</div>
                                    <div className="group-item">75%</div>
                                    <div className="group-item">100%</div>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Total</Form.Label>
                                <Form.Control type="text" placeholder="USDT" className="input" />
                                <p>Balance: 2 BTC</p>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Sell BTC
                            </Button>
                        </Form>
                    </div>
                </Col>

                <Col sm={8}>
                    <div className="handle-1">
                        <div className="table-responsive">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Pair</th>
                                        <th>Price</th>
                                        <th>Side</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Total</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="table-item">{item.Date}</td>
                                            <td className="table-item">{item.Pair}</td>
                                            <td className="table-item">{item.Price}</td>
                                            <td className="table-item">{item.Side}</td>
                                            <td className="table-item">{item.Type}</td>
                                            <td className="table-item">{item.Amount}</td>
                                            <td className="table-item">{item.Total}</td>
                                            <td className="table-item">{item.Cancel}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ResponsiveAutoExample;
