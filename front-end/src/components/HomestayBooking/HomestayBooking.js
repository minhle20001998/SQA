import React, { Component } from 'react'
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import Slideshow from "../Slideshow/Slideshow"
class HomestayBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImages: [
                'images/slide.jpg',
                'images/slide.jpg',
                'images/slide.jpg'
            ],
        };
    }
    render() {
        const { slideImages } = this.state;
        return <div className="homestay-booking">
            <Navbar />
            <Slideshow>{slideImages}</Slideshow>
            <Footer />
        </div>
    }
}

export default HomestayBooking;