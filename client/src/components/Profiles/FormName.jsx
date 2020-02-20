import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

class FormName extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    // const classes = useStyles();

    // const useStyles = makeStyles({
    //   root: {
    //     outline: "#ec2d90"
    //   }
    // });

    const MyButton = styled(Button)({
      background: "#ec2d90",
      "&:hover": {
        background: "#9f3054"
      }
    });

    const values = this.props
    return (
      <div>
        <form className="signup-multi-step-form">
          <h1>NAME</h1>
          <div className="textfield-button-div">
            <TextField
              // className={classes.root}
              id="outlined-basic"
              label="Enter Name"
              variant="outlined"
              onChange={this.props.handleChange("name")}
              defaultValue={values.name}
            />
            <MyButton variant="contained" color="primary" onClick={this.continue}>
              Next
            </MyButton>
          </div>
        </form>
      </div>
    );
  }
}

export default FormName
