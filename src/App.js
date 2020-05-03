import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import About from './pages/About';
import TermsCond from './pages/TermsCond';
import './utils/utility-classes.css';

import Cart from './pages/Cart';
import Favorites from './pages/Favorites';


class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {


      return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/category/:categoryName' component={Category} />
            <Route path='/about' component={About} />
            <Route path='/terms-and-conditions' component={TermsCond} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/cart' component={Cart} />
            <Route path='*' component={Page404}/>
          </Switch>
        </div>
      );

  }
}

export default App;
