
import { Provider } from 'react-redux';
import { store } from './store/index';
import * as React from 'react';
import Dummy from './lib/components/dummy';

function App() {
  return (
    <Provider store = {store}>
      <Dummy/>
    </Provider>
  );
}

export default App;
