import React, { useState, useEffect, Component } from "react";
import axios from "axios";

class ImageDisplay extends Component {


    render() {
        return (
            <img className="ImageDisplay" src={this.props.image}></img>
        );
    }
}

export default ImageDisplay;
