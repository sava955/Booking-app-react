import React, { Component } from 'react';

import { RentalCard } from './RentalCard';
import { Row } from 'react-bootstrap';

export class RentalList extends Component {

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <RentalCard key={index} colNum='3' rental={rental} />
            )
        })
    }

    render() {
        return (
            <Row>
                {this.renderRentals()}
            </Row>
        )
    }
}

