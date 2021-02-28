import React, { Component } from 'react'
import "./Navbar.css"
class Navbar extends Component {
    render() {
        return <nav id="admin-nav">
            <img className="admin-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqi2eeymNAgNrdvwQcDOf-6i3j_KN8eHFqw&usqp=CAU" alt="avatar" />
            <i className="fas fa-cog setting-icon" ></i>
        </nav>
    }
}

export default Navbar;