import React, { Component } from 'react';
import Navbar from '../Nav/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Homepage.css'
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImages: [
                'images/slide.jpg',
                'images/slide.jpg',
                'images/slide.jpg'
            ],
            pupularHomestays: [
                {
                    name: "HOMESTAY NAME 1",
                    address: "#address",
                    price: "$560"
                },
                {
                    name: "HOMESTAY NAME 2",
                    address: "#address",
                    price: "$560"
                },
                {
                    name: "HOMESTAY NAME 3",
                    address: "#address",
                    price: "$560"
                },
                {
                    name: "HOMESTAY NAME 4",
                    address: "#address",
                    price: "$560"
                },
            ],
            popularTrips: [
                {
                    comment: 'This is a testimonial related to travel, and some dummy text to make it long.',
                    title: "This is title of the travel package that is being featured here."
                },
                {
                    comment: 'This is a testimonial related to travel, and some dummy text to make it long.',
                    title: "This is title of the travel package that is being featured here."
                },
                {
                    comment: 'This is a testimonial related to travel, and some dummy text to make it long.',
                    title: "This is title of the travel package that is being featured here."
                },
                {
                    comment: 'This is a testimonial related to travel, and some dummy text to make it long.',
                    title: "This is title of the travel package that is being featured here."
                },
            ]
        }
    }

    render() {
        const { slideImages, pupularHomestays, popularTrips } = this.state;
        return <div className="homepage">
            <Navbar />
            <Slideshow>{slideImages}</Slideshow>
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
                <div className="popular-homestays">
                    <p className="main-heading">Our most popular homestay</p>
                    <div className="popular-homestays-body">
                        {pupularHomestays.map(homestay =>
                            <Link to="/" id={homestay.name+"-link"}>
                                <div className="thumbnail"></div>
                                <p className="homestay-name">{homestay.name}</p>
                                <p className="homestay-address">{homestay.address}</p>
                                <p className="homestay-price">{homestay.price}</p>
                            </Link>
                        )}
                    </div>
                    <div className="popular-homestays-footer">
                        <button className="all-products-button">VIEW ALL PRODUCTS</button>
                    </div>
                </div>
                <div className="popular-trips">
                    <p className="main-heading">Our most popular trips</p>
                    <div className="popular-trips-body">
                        {popularTrips.map(trip =>
                            <div className="travel-card">
                                <div className="top-div">
                                    <div className="avatar">
                                    </div>
                                    <div className="popular-trips-comment">
                                        <p >
                                            <q className="quotes">
                                                {trip.comment}
                                            </q>
                                        </p>
                                    </div>
                                </div>
                                <div to="/" className="card box-shadow padding-for-beige">
                                    <div className="card-info">
                                        <p className="card-title">{trip.title}</p>
                                        <Link to="/">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    }
}

export default Homepage;