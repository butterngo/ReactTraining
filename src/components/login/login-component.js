import React, { Component } from 'react';
import { get } from 'http';

class LoginComponent extends Component {
  
  constructor(props){
    super(props)
    this.state= { id:"", userName:"" };
  };

  onChangeUserName(e){
    this.setState({userName: e.target.value});
  };

  onChangeId(e){
  
    this.setState({id: e.target.value});
    //console.log("onchange ", e.target.value);
    //console.log("Ref ", this.refs["id"].value);
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.clear === true){
        this.setState({ id:"", userName:""  });
    }
  };

  onAdd(){
      if(this.props.onAdd){
        this.props.onAdd(this.state);
      }
  };

  render() {
    return (

      <div> 
         <div className="form-group">
                <label>Id</label>
                <input 
                    value={this.state.id}
                    className="form-control"
                    ref="id"
                    type="text" onChange={this.onChangeId.bind(this)}
                    placeholder="User name"></input>
                    <small className="form-text text-muted">
                    {this.props.error}
                </small>
            </div>
          <div className="form-group">
                <label>Email address</label>
                <input 
                    value={this.state.userName}
                    className="form-control"
                    type="text" onChange={this.onChangeUserName.bind(this)}
                    placeholder="User name"></input>
                    <small className="form-text text-muted">
                    {this.props.error}
                </small>
            </div>
            <button className="btn btn-primary"
             onClick={this.onAdd.bind(this)} 
             disabled={this.state.value ==="" || this.state.id ===""}
            >Add</button>
     </div>
    );
  }
}

export default LoginComponent;