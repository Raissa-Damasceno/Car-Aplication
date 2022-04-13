import { Row, Col, Card } from "react-bootstrap"
import './carsCard.css'

function CarsCard({ cars }) {
    return (
        <>
        <div className="container-card">
            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <div>
                            <Card key={idx}>
                                <Card.Body>
                                    <Card.Title>{cars.BRAND} {cars.MODEL}</Card.Title>
                                    <Card.Img variant="top" src={cars.IMAGEM} alt='img' />
                                    <Card.Text>
                                        Mileage between {cars.MIN_MILEAGE}km and {cars.MAX_MILEAGE}km
                                    </Card.Text>
                                    <Card.Text>
                                        Dealer: {cars.DEALER}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div> 
        </>
    )
}

export default CarsCard;