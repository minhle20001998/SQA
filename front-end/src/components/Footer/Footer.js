import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Footer.css';

const source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqi2eeymNAgNrdvwQcDOf-6i3j_KN8eHFqw&usqp=CAU";

class Footer extends Component {

    render() {
        return <footer>
            <Router>
                <div className="footer-bar">
                    <div className="homestay-logo">
                        <img src={source} alt="logo" className="logo" />
                    </div>
                    <p className="address">#ADDRESS </p>
                    <div className="community">
                        <Link to="/">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
                <div className="copyright">
                    <p>2021 Copyright information goes here.</p>
                    <p>Designed by SQA team</p>
                </div>
            </Router>
        </ footer>
    }
}

export default Footer;