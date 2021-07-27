import { BOOK_NOW } from './BookingActionTypes'

const initialState = {
  numOfBooking: 10
}

const BookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_NOW:
      return {
        ...state,
        numOfBooking: state.numOfBooking + action.payload
      }

    default:
      return state
  }
}

export default BookingReducer