import React, { Component } from 'react';
import './Features.css';
import slugify from 'slugify';
import Options from '../Options/Options';

class Features extends Component{
   render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
         const featureHash = feature + '-' + idx;
         const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
               <Options
                  key={itemHash}
                  feature={feature}
                  featureHash={featureHash}
                  itemHash={itemHash}
                  item={item}
                  selected={this.props.selected}
                  handleUpdate={this.props.handleUpdate}
                  currency={this.props.currency} 
               />
            );
         });
         
         return (
            <fieldset className="feature" key={featureHash}>
               <legend className="feature__name">
                  <h3>{feature}</h3>
               </legend>
               {options}
            </fieldset>
         );
      });
      return features
   }
}

export default Features;