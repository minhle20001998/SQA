import React, { Component } from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css'


class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImages: this.props.children
        }
    }
    render() {
        const { slideImages } = this.state;
        return (
            <div className="slide-container" >
                <Slide>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            <span>image slide bar</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            <span>image slide bar</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            <span>image slide bar</span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Slideshow;