import React, { Component } from 'react';
// import LoginView from '../LoginView/LoginView';
import MainView from '../MainView/MainView';
// import TripView from '../TripView/TripView';

class App extends Component {
  constructor() {
    super()
    // this.handleEtaChange = this.handleEtaChange.bind(this)
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
        <MainView 
          eta={this.state.eta} 
          handleEtaChange={this.handleEtaChange}
        />
        {/* <TripView /> */}
      </div>
    );
  }
}

export default App;
