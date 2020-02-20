import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import "../../styles/Home/MultiStepForm.css";
import NavBar from "../../containers/NavBar";

class FormGender extends Component {
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
          <h1>Gender</h1>
          <div className="textfield-button-div">
            <TextField
              id="outlined-basic"
              label="Enter Gender"
              variant="outlined"
              onChange={this.props.handleChange("gender")}
              defaultValue={this.props.values.gender}
            />
            <MyButton variant="contained" color="primary" onClick={this.continue}>
              Next
            </MyButton>
            <MyButton variant="contained" color="primary" onClick={this.goBack}>
              Back
            </MyButton>
          </div>
        </form>
      </div>
    );
  }
}

export default FormGender;


