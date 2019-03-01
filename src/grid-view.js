import React, { Component } from 'react';

class GridViewComponent extends Component {
  
  constructor(props){
    super(props)
  };

  render() {
    return (

      <div> 
        <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            this.props.items.map((item, i) =>{
                return <tr key={i}>
                        <td>{item.name}</td>
                        <td><a href="#" onClick={()=>{
                                this.props.onDelete(item)
                        }}>Delete</a></td>
                    </tr>;
            })
        }
    </tbody>
  </table>
     </div>
    );
  }
}

export default GridViewComponent;