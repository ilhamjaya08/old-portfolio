import React from "react";
import { Button, Card } from "react-bootstrap";

function MediaCards () {
    return (
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://widgets.sociablekit.com/instagram-feed/iframe/25348299" />
           <Card.Body>
           <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
           <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
    );
}

export default MediaCards;