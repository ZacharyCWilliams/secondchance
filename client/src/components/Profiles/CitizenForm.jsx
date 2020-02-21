import React, { Component } from 'react';
import FormName from './FormName';
import FormAge from './FormAge';
import FormLocation from './FormLocation';
import FormGender from './FormGender';
// import moduleName from 'material-ui/styles/'

class CitizenForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      name: '',
      gender: '',
      location: '',
      age: ''
    }

    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
  }


  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
    console.log(this.state)
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
    console.log(this.state)
  }

  // edit profile attributes

  handleChange = input => e => {
    this.setState({
       [input]: e.target.value
    })
  }

  render() {

    const { step } = this.state;
    const { name, gender, location, age } = this.state
    const values = { step, name, gender, location, age };
    
    switch(step) {
      case 1:
        return (
          <div>
            <FormName
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2: 
        return (
          <div>
            <FormAge
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3: 
        return (
          <div>
            <FormLocation
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 4: 
        return (
          <div>
            <FormGender
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 5: 
        return (
          <div>
            <h1>Photo Upload</h1>
          </div>
        );
    }
  }
}

export default CitizenForm
