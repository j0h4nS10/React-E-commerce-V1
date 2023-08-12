import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './CardCart.css'

function CardCart({ id, header, img, title, text, footer, amountitem1, setAmountitem1 }) {
    console.log("inside CardCArt")
    return (
        <Card className="text-center" key={id}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} style={{width: 100}} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}
                </Card.Text>
                <Card.Text>{amountitem1}</Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={() => { setAmountitem1(amountitem1 - 1) }}>-</Button>
                    <Button variant="secondary" onClick={() => { setAmountitem1(amountitem1 + 1) }}>+</Button>
                </ButtonGroup>
                <Button variant="primary" onClick={() => { setAmountitem1(0) }}> D </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{footer}</Card.Footer>
        </Card>
    );
}

export default CardCart;