import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bookNow } from '../redux'

class BookingClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class component:</h1>
        <p>Number of order: { this.props.numOfBooking }</p>
        <button onClick={ this.props.bookNow }>Book Now</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numOfBooking: state.booking.numOfBooking
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bookNow: () => dispatch(bookNow())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingClassComponent)