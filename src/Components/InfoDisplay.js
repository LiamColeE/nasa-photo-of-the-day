import React, {useState, useEffect, Component} from "react";
import axios from "axios";

class InfoDisplay extends Component{
 render() {
    return (
        <div className="InfoDisplay">
            <h1 width="300px" fontSize="30px">{ this.props.info.title }</h1>
            <h2>By: { this.props.info.copyright } </h2>
            <p>Whats Happening: { this.props.info.explanation }</p>
        </div>
    );
    }
}

export default InfoDisplay;
