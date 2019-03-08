import React, { Component } from 'react';
import { connect } from "react-redux";
import GridViewComponent from "../login/grid-view";

class ManageUser extends Component {
  constructor(props){
    super(props)
  };

  onNavigate(){
    this.props.history.push({ pathname:"/", state: this.state });
  };
   
  onBack(){
    this.props.history.goBack();
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
        <button onClick={this.onNavigate.bind(this)}>Navigate App</button>
        <button onClick={this.onBack.bind(this)}>Back App</button>
        <GridViewComponent items={appStore.items} onDelete={this.onDelete.bind(this)}/>
      </div>
    );
  }
}

//export default App;
const mapStateToProps = state => {
  
   return {appStore : state.appStore };
};

export default connect(mapStateToProps)(ManageUser);
