import React, { Component } from 'react';
import LoginComponent from "./login-component";
import GridViewComponent from "./grid-view";
import './App.css';
//const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props){
    super(props)
    this.state= { items:[], existing: false };
  };

   onAdd(value) {
     let items = this.state.items;
     let profile = {id: "", name: value.trim()};
     let existing = false;
     items.map((item, i) =>{
        if(item.name === value.trim()){
          existing = true;
          return;
        }
     });

     if(!existing){
       items.push(profile);
     }

     this.setState({ items: this.state.items, existing: existing });
   };
  
   onDelete(data){
    var items = this.state.items;
    let newArray = [];
    items.map((item, i) =>{
       if(item.id === data.id){
        newArray = items.splice(i, 1);
         return;
       }
    });

    this.setState({ items: newArray });
   };

   
  render() {
    return (
      <div className="container">
        <LoginComponent 
         clear={this.state.existing === true ? false : true }
         error={this.state.existing === true ? "existing.": ""}
         onAdd={this.onAdd.bind(this)} />
        <br/>
        <GridViewComponent items={this.state.items} onDelete={this.onDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
