import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 55 },
      { id: 3, value: 0 },
      { id: 4, value: 7 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          onDelete={this.onDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }

  onDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default App;
