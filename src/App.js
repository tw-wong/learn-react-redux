import React from 'react'
import BookingClassComponent from './components/BookingClassComponent'
import BookingFunctionalComponent from './components/BookingFunctionalComponent'
import { Provider } from 'react-redux'
import store from './redux/store'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <BookingClassComponent />
        <hr />
        <BookingFunctionalComponent />
      </div>
    </Provider>
  )
}

export default App