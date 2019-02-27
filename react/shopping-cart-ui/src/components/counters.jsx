import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 55 },
      { id: 3, value: 1 },
      { id: 4, value: 58 }
    ]
  };

  onDelete = () => {
    console.log("Delete Event Toggled!");
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.onDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;