import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import "../../styles/Home/MultiStepForm.css";
import NavBar from "../../containers/NavBar";

class FormLocation extends Component {
  constructor(props) {
    super(props);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  goBack = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const MyButton = styled(Button)({
      background: "#ec2d90",
      "&:hover": {
        background: "#9f3054"
      }
    });

    return (
      <div>
        <form className="signup-multi-step-form">
          <h1>State</h1>
          <TextField
            id="outlined-basic"
            label="Enter State"
            variant="outlined"
            onChange={this.props.handleChange("location")}
            defaultValue={this.props.values.location}
          />
          <MyButton variant="contained" color="primary" onClick={this.continue}>
            Next
          </MyButton>
          <MyButton variant="contained" color="primary" onClick={this.goBack}>
            Back
          </MyButton>
        </form>
      </div>
    );
  }
}

export default FormLocation;

