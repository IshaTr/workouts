import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Workouts from './components/Workouts'
import reducer from './store/reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => (
  <Provider store={store}>
    <Workouts />
  </Provider>
)

export default App
