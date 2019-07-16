import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header';
import Home from './page/home';
import Detail from './page/detail';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BrowserRouter>
         <div>
           <Route path="/" exact component={Home}/>
           <Route path="/detail"  exact component={Detail} />
         </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
