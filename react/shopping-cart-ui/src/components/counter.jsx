import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["qw"]
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags.</p>;
    }

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Consider Creating a New Tag."}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
