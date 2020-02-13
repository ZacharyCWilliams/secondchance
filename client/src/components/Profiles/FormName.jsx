import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class FormName extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }

  render() {

    const values = this.props
    return (
      <div>
        <form className="signup-multi-step-form">
          <h1>NAME</h1>
          <TextField
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            onChange={this.props.handleChange("name")}
            defaultValue={values.name}
          />
          <Button variant="contained" color="primary" onClick={this.continue}>
            Next
          </Button>
        </form>
      </div>
    );
  }
}

export default FormName
