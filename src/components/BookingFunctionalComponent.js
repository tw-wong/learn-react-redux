import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bookNow } from '../redux'

const BookingFunctionalComponent = (props) => {
  const state = useSelector(state => state.booking)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Functional component:</h1>
        <p>Number of order: { state.numOfBooking }</p>
        <button onClick={() => dispatch(bookNow())}>Book Now</button>
      </div>
  )
}

export default BookingFunctionalComponent