import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';

export function RentalCard(props) {
    const rental = props.rental;

    return (
        <Col md={props.colNum}>
            <Link to={`/rentals/${rental.id}`}>
                <Card className="card">
                    <Card.Img variant="top" src={rental.image} alt="" />
                    <Card.Body>
                        <Card.Text>{rental.shared ? 'shared' : 'whole'} {rental.category} &#183; {rental.city}</Card.Text>
                        <Card.Title>{rental.title}</Card.Title>
                        <Card.Text>{rental.dailyRate} per Night &#183; Free Cancelation</Card.Text>
                        <Button variant="primary">More info</Button>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}