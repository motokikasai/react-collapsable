import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data[0].id);

    return (
      <div>
        <h1>Collapsable List</h1>
        <ul>
          {this.props.data.map(item => {
            return <li key={item.id}>{item.question}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Collapsable;
