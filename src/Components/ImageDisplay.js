import React, {useState, useEffect, Component} from "react";
import axios from "axios";

class ImageDisplay extends Component{


    render() {
    return (
        <div className="ImageDisplay">
            <p>
                <img width="300px" height="300px"src={ this.props.image }></img>
            </p>
        </div>
    );
    }
}

export default ImageDisplay;
