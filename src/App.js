import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage-styles.scss';
import ShopPage from './pages/shop/shop.component';



// const HatsPage = () => (
//   <div>
//     <h1>Hats test page</h1>
//   </div>
// )

const TopicDetail = () => (
  <div>
    <h1>TopicDetail test page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component={HomePage} /> 
     <Route path='/shop' component={ShopPage} /> 
     <Route path='/topics/:topicid' component={TopicDetail} /> 
     </Switch>
    </div>
  
  );
}

export default App;

