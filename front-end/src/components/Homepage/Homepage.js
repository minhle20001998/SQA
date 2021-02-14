import React, { Component } from 'react';
import Navbar from '../Nav/Navbar';
import Slideshow from '../Slideshow/Slideshow'
import './Homepage.css'
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImages: [
                'images/slide.jpg',
                'images/slide.jpg',
                'images/slide.jpg'
            ]
        }
    }

    render() {
        const { slideImages } = this.state;
        return <div className="homepage">
            <Navbar />
            <Slideshow>{slideImages}</Slideshow>
            <div className="container">
                <header>
                    <div className="inspiration-div">
                        <div className="icon"></div>
                        <p className="heading">INSPIRATION</p>
                        <p className="content">
                            Many tourist attraction are shown here. Let’s see !
                        </p>
                    </div>
                    <div className="image-div">
                        <div className="icon"></div>
                        <p className="heading">IMAGE</p>
                        <p className="content">
                            List of image about homestay in everywhere !
                        </p>
                    </div>
                    <div className="experiences-div">
                        <div className="icon"></div>
                        <p className="heading">JOURNEY’S EXPERIENCES</p>
                        <p className="content">
                            Share journeys about places where you go with family, friend and partner !
                        </p>
                    </div>
                </header>
                <section>
                    <div className="popular-homestay">
                        <p className="most-heading">Our most popular homestay</p>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Homepage;