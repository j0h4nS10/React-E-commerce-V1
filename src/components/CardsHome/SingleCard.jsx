import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard( {header,img,title,text,btntext,footer}) {
    return (
        <Card className="text-center">
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}
                </Card.Text>
                <Button variant="primary">{btntext}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{footer}</Card.Footer>
        </Card>
    );
}

export default SingleCard;