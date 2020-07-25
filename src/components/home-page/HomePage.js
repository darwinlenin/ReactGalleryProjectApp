import React from 'react';
import ComponentTabs from '../Components-tabs/ComponentTabs';
import ComponentCard from '../ComponentCard/ComponentCard';
import ComponentCarousel from '../ComponentCarousel/ComponentCarousel';
import ComponentImagesAdvanced from '../Component-Images-Advanced/ComponentImagesAvanced';

import './HomePage.css';

class HomePage extends React.Component{
    render(){
        return (
          <div className="baseStyle">
            <h1>Portfolio of Projects</h1>
            <p className={this.props.type}>
              This Page have been powered by React.js - PrimeReact - Material-UI.             
            </p>
            <p className="styleContentTwo">Realized by: {this.props.name}</p>
            {<ComponentCard/>}
            <ComponentCarousel/>
            <p className="noteSubtittle"> Youtube Video Tutorials of Unity Engine - VR - Multiplayer Games - Google Play Store Apps { this.props.images} </p>
            {<ComponentTabs/>}
            <h2>
              By the following gallery you can you access to preview some another projects published by @darwinlenin in ZoeGeop Technologies.            
            </h2>
            <ComponentImagesAdvanced/>

          </div>
        );
    }
}
export default HomePage;