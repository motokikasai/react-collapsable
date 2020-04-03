import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: true,
      off: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Yeeeaaah, clicked!");
  }

  render() {
    return (
      <li>
        <div
          className={`header ${this.props.data.category}`}
          onClick={this.handleClick}
        >
          <span className="label">{this.props.data.question}</span>
          <span className="caret">&#8910;</span>
        </div>
        <div className="content">{this.props.data.answer}</div>
      </li>
    );
  }
}

export default Collapsable;
