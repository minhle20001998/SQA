import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../Nav/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Homepage.css';
import ScrollUpButton from "react-scroll-up-button";
import images from "../../images/slide_2.jpg"
const avatars = [
    images,
    images,
    images,
    images
]
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideImages: [

            ],
            homestays: null

            ,
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
            ],
            testData: null

        }

    }


    async componentDidMount() {
        const urlHomestay = "https://sqa-api.herokuapp.com/homestay";
        const resHomestay = await axios.get(urlHomestay);
        const dataHomestay = await resHomestay.data;
        const popular_homestays = [];
        const slide_images = [];
        for (let i = 0; i < 4; i++) {
            popular_homestays.push(dataHomestay[i]);
            slide_images.push(dataHomestay[i].image_link[1]);
        }
        this.setState({
            homestays: popular_homestays,
            slideImages: slide_images
        })
        //
        const urlReview = "https://sqa-api.herokuapp.com/review"
        const resReview = await axios.get(urlReview);
        const dataReview = await resReview.data;
        const popular_trips = dataReview.slice(0, 4);
        this.setState({
            popularTrips: popular_trips
        })
    }

    render() {
        const { slideImages, homestays, popularTrips } = this.state;

        //
        return <div className="homepage" >
            <ScrollUpButton />
            <Navbar />
            {(slideImages.length > 0) ? <Slideshow>{slideImages}</Slideshow> : <></>}
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
                        {homestays && homestays.map(homestay =>
                            <Link to="/" key={homestay.name + "-link"}>
                                <div className="thumbnail" style={{ backgroundImage: `url(${homestay.image_link[0]})` }}></div>
                                <p className="homestay-name">{homestay.name}</p>
                                <p className="homestay-address">{homestay.address}</p>
                                <p className="homestay-price">{homestay.price + " VND"}</p>
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
                        {homestays && homestays.length > 0 && popularTrips && popularTrips.map((trip, index) => {
                            return <div className="travel-card" key={Math.random() * popularTrips.length}>
                                <div className="top-div">
                                    <div className="avatar" style={{ backgroundImage: `url(${avatars[index]})` }}>
                                    </div>
                                    <div className="popular-trips-comment">
                                        <p >
                                            <q className="quotes">
                                                {trip.content}
                                            </q>
                                        </p>
                                    </div>
                                </div>
                                <div to="/" className="card box-shadow padding-for-beige"
                                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${homestays[index].image_link[0]})` }}
                                >
                                    <div className="card-info">
                                        <Link to="/">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    }
}

export default Homepage;