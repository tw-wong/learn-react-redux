import { BOOK_NOW } from './BookingActionTypes'

export const bookNow = (number = 1) => {
  return {
    type: BOOK_NOW,
    payload: number
  }
}