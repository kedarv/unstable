import React from "react";
import "./App.css";
import cardData from "../../data.json";
import UnicornCard from "../UnicornCard/UnicornCard";
import { Grid, Container, TextInput } from "@mantine/core";
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
        <Container size="xl">
          <TextInput
            placeholder="Search..."
            onChange={this.handleSearchChange}
            mb="xl"
          />
          <Grid>
            {this.state.items.map((object, i) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                <UnicornCard {...object}></UnicornCard>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
