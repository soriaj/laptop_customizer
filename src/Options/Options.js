import React, {Component } from 'react';
import slugify from 'slugify';
import './Option.css';

class Options extends Component{
   render(){
      const {feature, item, itemHash, currency, selected, handleUpdate} = this.props
      return(
         <div key={itemHash} className="feature__item">
            <input
               type="radio"
               id={itemHash}
               className="feature__option"
               name={slugify(feature)}
               checked={item.name === selected[feature].name}
               onChange={e => handleUpdate(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
               {item.name} ({currency.format(item.cost)})
            </label>
         </div>
      )
   }
}

export default Options;