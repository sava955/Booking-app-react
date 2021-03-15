import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

class RentalDetail extends Component {
    
    componentDidMount() {
        const rentalId = this.props.match.params.id;

        this.props.dispatch(actions.fetchRentalById(rentalId));
    }

    render() {
        const rental = this.props.rental;

        if (rental.id) {
            return(
                <div>
                    I am detail {rental.title}
                </div>
            )
        } else {
            return(
                <h1>Loading...</h1>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data
    }
}

export default connect(mapStateToProps)(RentalDetail)