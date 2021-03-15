import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RentalList } from './RentalList';

import * as actions from '../../../actions';

export class RentalListing extends Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    render() {
        return (
            <div>
                <h1>Your home all around the world</h1>
                <RentalList rentals={this.props.rentals} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing)