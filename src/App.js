import React from 'react';
import GroceryApp from './component/grocery';
import {store} from './store';

function App() {
  return (
    <div className="App">
      <GroceryApp productList={store.getState()}/>
    </div>
  );
}

export default App;
