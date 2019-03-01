import React, { Component } from 'react';
import PropTypes from "prop-types";

class ComponentTest extends Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        placeholder: PropTypes.string,
        onRemote: PropTypes.func,
        options: PropTypes.array,
      };
    
    /*static defaultProps = {
        clearable: false,
        isMulti: false,
        disabled: false
    };*/
  constructor(props){
    super(props)
    
  };

  onChange(e){
  
  };

   onAdd(){
  
   };

  render() {
    return (
      <div className="aa">
        Test Component
      </div>
    );
  }
}

export default ComponentTest;
