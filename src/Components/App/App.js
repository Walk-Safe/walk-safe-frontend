import React, { Component } from 'react';
// import LoginView from '../LoginView/LoginView';
// import MainView from '../MainView/MainView';
import TripView from '../TripView/TripView';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eta: '',
    }
  }

  handleEtaChange = (time) => {
    this.setState({ eta: time })
  }

  render() {
    return (
      <div className="App">
        {/* <LoginView /> */}
        {/* <MainView 
          handleEtaChange={this.handleEtaChange}
        /> */}
        <TripView 
          eta={this.state.eta}
        />
      </div>
    );
  }
}

export default App;
