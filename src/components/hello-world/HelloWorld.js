import React from 'react';
import Button from "@material-ui/core/Button";

import './HelloWorld.css';

class HelloWorld extends React.Component{
    render(){
        return (
          <div className="baseStyle">
            <h1>Images App</h1>
            <p className="styleContentTwo">Projects realized by {this.props.name}</p>
            <p className="noteSubtittle"> Gallery example of { this.props.images} </p>
            <p className={this.props.type}>
              This is an example of images gallery buttons created with React.js library Google Font Apis and Material UI Components.
            </p>
            <Button variant="contained" color="yellow" href="https://angularvideostreaming.herokuapp.com/" target="_blank">
              Angular Video Streaming App
            </Button>
            <Button variant="contained" color="primary" href="https://castingagencyfsnd1.herokuapp.com/" target="_blank">
              Python Flask Casting Agency App
            </Button>
            <Button variant="contained" color="secondary" href="https://polar-tor-85813.herokuapp.com/" target="_blank">
              Phaser Snake Game App
            </Button>
            <Button variant="contained" href="https://www.zoegeop.com" target="_blank">
              See more in zoegeop.com
            </Button>
          </div>
        );
    }
}
export default HelloWorld;