import React, { Component } from 'react';

class LoginComponent extends Component {
  
  constructor(props){
    super(props)
    this.state= { value:"" };
  };

  onChange(e){
    this.setState({value: e.target.value});
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.clear === true){
        this.setState({ value:"" });
    }
  };

  onAdd(){
      if(this.props.onAdd){
        this.props.onAdd(this.state.value);
      }
  };

  render() {
    return (

      <div> 
          <div className="form-group">
                <label>Email address</label>
                <input 
                    value={this.state.value}
                    className="form-control"
                    type="text" onChange={this.onChange.bind(this)}
                    placeholder="User name"></input>
                    <small className="form-text text-muted">
                    {this.props.error}
                </small>
            </div>
            <button className="btn btn-primary"
             onClick={this.onAdd.bind(this)} 
             disabled={this.state.value ===""}
            >Add</button>
     </div>
    );
  }
}

export default LoginComponent;