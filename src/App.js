import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage-styles.scss';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';


const TopicDetail = () => (
  <div>
    <h1>TopicDetail test page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
     <Route exact path='/' component={HomePage} /> 
     <Route path='/shop' component={ShopPage} /> 
     <Route path='/signin' component={SignInAndSignUpPage} /> 
     <Route path='/topics/:topicid' component={TopicDetail} /> 
     </Switch>
     
    </div>
  
  );
}

export default App;

