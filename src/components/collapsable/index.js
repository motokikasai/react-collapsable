import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div key={this.props.data.id}>{this.props.data.question}</div>
      </li>
    );
  }
}

export default Collapsable;
