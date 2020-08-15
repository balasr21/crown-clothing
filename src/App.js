import React from 'react';
import './App.css';
import './components/pages/homepage/homepage.component';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignOut}/>
      </Switch>
    </div>
  );
}

export default App;
