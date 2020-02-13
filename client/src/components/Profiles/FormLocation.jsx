import React, { Component } from "react";

class FormLocation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.nextStep}>
          <h1>Successfully rendering FormLocation</h1>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default FormLocation;
