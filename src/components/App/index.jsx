import React from 'react';
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Header from '../Header';
import Main from '../Main';
import store from '../../store'

const App = () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Main/>
    </DndProvider>
  </Provider>
)

export default App;
