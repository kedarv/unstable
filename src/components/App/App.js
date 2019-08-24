import React from 'react';
import './App.css';
import cardData from '../../data.json';
import UnicornCard from '../UnicornCard/UnicornCard';
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <form>
        <div class="search-box">
          <div class="search-box_wrapper">
            <input class="card-input"></input>
          </div>
        </div>
      </form>
      <Card.Group itemsPerRow={4}>
       {cardData.map((object, i) => <UnicornCard {...object} key={i}></UnicornCard>)}
       </Card.Group>
    </div>
  );
}

export default App;
