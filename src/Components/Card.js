import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import ImageDisplay from "./ImageDisplay";
import InfoDisplay from "./InfoDisplay";

class Card extends Component {
    render() {
        return (
            <div class="card">
                <ImageDisplay image={this.props.image} />
                <InfoDisplay info={this.props.info} />
            </div>
        );
    }
}

export default Card;
