import { combineReducers } from 'redux'
import bookingReducer from './Booking/BookingReducer'

const rootReducer = combineReducers({
  booking: bookingReducer,
  // ...
})

export default rootReducer