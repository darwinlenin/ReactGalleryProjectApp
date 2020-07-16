import React from 'react';
import Button from "@material-ui/core/Button";

import './HelloWorld.css';

class HelloWorld extends React.Component{
    render(){
        return (
          <div className="baseStyle">
            <h1>Images App</h1>
            <p className="styleContentTwo">You'r Welcome {this.props.name}</p>
            <p className="noteSubtittle"> Gallery example of { this.props.images} </p>
            <p className={this.props.type}>
              This is an example of images gallery buttons created with React.js library Google Font Apis and Material UI Components.
            </p>
            <Button variant="contained" color="primary">
              Click effects
            </Button>
          </div>
        );
    }
}
export default HelloWorld;