import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import Header from './common/header';
import Home from './page/home';
import Detail from './page/detail/loadable.js';
import Register from './page/register';
import Login from './page/login';
import Write from './page/write';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path='/login' exact component={Register}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
