import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import "../../styles/Home/MultiStepForm.css"
import NavBar from "../../containers/NavBar"



class FormAge extends Component {
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

    // const MyTextField = styled(TextField)({
    //   outline: "1px solid #ec2d90"
    // });

    return (
      <div>
        <form className="signup-multi-step-form">
          <h1>AGE</h1>
          <TextField
            id="outlined-basic"
            label="Enter Age"
            variant="outlined"
            onChange={this.props.handleChange("age")}
            defaultValue={this.props.values.age}
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

export default FormAge;
