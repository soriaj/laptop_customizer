import React, { Component } from 'react';
import './CustomizeForm.css'
import Features from '../Features/Features';

class CustomizeForm extends Component{
   render(){
      // console.log('CustomizeForm props is: ', this.props.currency)
      return(
         <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
               features={this.props.features}
               selected={this.props.selected}
               currency={this.props.currency}
               handleUpdate={this.props.handleUpdate} />
         </form>
      )
   }
}

export default CustomizeForm;