import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.data.id}>
        <div className="header">
          <span className="label">{this.props.data.question}</span>
          <span className="caret">&#94;</span>
        </div>
        <div className="content">{this.props.data.answer}</div>
      </li>
    );
  }
}

export default Collapsable;
