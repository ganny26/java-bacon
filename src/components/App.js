import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { showMessage } from '../actions/AppActions';
import AppConstant from '../shared/AppConstants';
import MainComponent from '../components/MainComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "message": ""
    }

  }
  componentDidMount() {
    this.props.showMessage(AppConstant.MESSAGE_TEXT);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.welcomeMessage.messageText}</h1>
        </header>
        <MainComponent heading="All rights Reserved 2018"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    welcomeMessage: state.app
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    showMessage: (text) => {
      dispatch(showMessage(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
