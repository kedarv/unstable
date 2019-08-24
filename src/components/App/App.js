import React from 'react';
import './App.css';
import cardData from '../../data.json';
import UnicornCard from '../UnicornCard/UnicornCard';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Segment } from 'semantic-ui-react'

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
      <Grid stackable columns={4}>
        {cardData.map((object, i) => <Grid.Column><UnicornCard {...object} key={i}></UnicornCard></Grid.Column>)}
      </Grid>
    </div>
  );
}

export default App;
