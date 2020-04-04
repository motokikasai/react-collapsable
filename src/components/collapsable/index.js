import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      console.log(state.tab);
      return { tab: !state.tab };
    });
  }

  render() {
    return (
      <li>
        <div
          className={`header ${this.props.data.category} ${
            this.state.tab === true ? "edged-header" : ""
          }`}
          onClick={this.handleClick}
        >
          <span className="label">{this.props.data.question}</span>
          <span
            className={`caret ${this.state.tab === true ? "caret-rotate" : ""}`}
          >
            &#8910;
          </span>
        </div>
        {this.state.tab === true ? (
          <div className="content">{this.props.data.answer}</div>
        ) : (
          <div></div>
        )}
      </li>
    );
  }
}

export default Collapsable;
