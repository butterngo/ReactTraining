import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginComponent from "./login-component";
import GridViewComponent from "./grid-view";
import './App.css';
import { Link } from 'react-router-dom';
//const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props)
  };

   onAdd(data) {
     this.props.dispatch({
        type:"APP_ADD_USER",
        data: data
     });
     
   };
  
   onDelete(data){
    this.props.dispatch({
      type:"APP_DELETE_USER",
      data: data
    });
   };

  render() {
    
    const appStore = this.props.appStore;

    return (
      <div className="container">
        <Link to={{pathname:"/users", state: appStore }}>Users</Link>
        <Link to={"/users/edit/1111"}>Edit user</Link>
        <LoginComponent 
         clear={appStore.existing === true ? false : true }
         error={appStore.existing === true ? "existing.": ""}
         onAdd={this.onAdd.bind(this)} />
        <br/>
        <GridViewComponent items={appStore.items} onDelete={this.onDelete.bind(this)}/>
      </div>
    );
  }
}

//export default App;
const mapStateToProps = state => {
  return {appStore : state.appStore };
};

export default connect(mapStateToProps)(App);
