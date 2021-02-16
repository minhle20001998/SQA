import React, { Component } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const links = [{ name: "destination", link: "/destination" },
{ name: "homestay booking", link: "/booking" },
{ name: "image", link: "/image" },
{ name: "journey experiences", link: "/journey" }
]
const source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqi2eeymNAgNrdvwQcDOf-6i3j_KN8eHFqw&usqp=CAU";


class Navbar extends Component {


    render() {
        return <nav className="navbar">
            <Router>
                <div className="homestay-logo">
                    <img src={source} alt="logo" className="logo" />
                </div>
                <div className="links">
                    <ul>
                        {links.map(link => <li> <Link to={link.link}>{link.name}</Link> </li>)}
                    </ul>
                </div>
                <div className="user-area">
                    <i class="fas fa-bell" id="bell-icon"></i>
                    <i class="fas fa-user-circle" id="user-icon"></i>
                </div>
            </Router >
        </nav>
    }
}

export default Navbar;