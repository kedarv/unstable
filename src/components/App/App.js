import React from "react";
import "./App.css";
import cardData from "../../data.json";
import UnicornCard from "../UnicornCard/UnicornCard";
import "semantic-ui-css/semantic.min.css";
import { Grid, Container, Input } from "semantic-ui-react";
import Fuse from "fuse.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: cardData
    };
    let options = {
      keys: ["name"]
    };
    this.fuse = new Fuse(cardData, options);
  }

  handleSearchChange = e => {
    this.setState({ items: this.fuse.search(e.target.value) });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Input
            fluid
            icon="search"
            onChange={this.handleSearchChange}
            placeholder="Search..."
          />
          <br />
          <br />
          <Grid stackable columns={4}>
            {this.state.items.map((object, i) => (
              <Grid.Column>
                <UnicornCard {...object} key={i}></UnicornCard>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
