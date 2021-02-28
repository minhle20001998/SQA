import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./Homepage.css"
class Homepage extends Component {
    render() {
        return <div className="admin-homepage">
            <Sidebar />
            <div className="main-view">
                <Navbar />
                <header>
                    <h4 className="welcome-header">Hi, Welcome back!</h4>
                    <h4>HOMESTAYS Dashboard</h4>
                </header>
                <section id="statistic">
                    <div className="total-booking">
                        <div className="statistic-icon" style={{ background: '#6777ef' }}>
                            <i className="fas fa-paste"></i>
                        </div>
                        <p className="statistic-name">
                            Total Booking
                        </p>
                        <div className="statistic-data">
                            1500
                        </div>
                    </div>
                    <div className="total-booking">
                        <div className="statistic-icon" style={{ background: '#fd7e14' }}>
                            <i className="fas fa-paste"></i>
                        </div>
                        <p className="statistic-name">
                            Homestays
                        </p>
                        <div className="statistic-data">
                            1500
                        </div>
                    </div>
                    <div className="total-booking">
                        <div className="statistic-icon" style={{ background: '#28a745' }}>
                            <i className="fas fa-paste"></i>
                        </div>
                        <p className="statistic-name">
                            Ratings
                        </p>
                        <div className="statistic-data">
                            1500
                        </div>
                    </div>
                    <div className="total-booking">
                        <div className="statistic-icon" style={{ background: '#17a2b8' }}>
                            <i className="fas fa-paste"></i>
                        </div>
                        <p className="statistic-name">
                            Total Revenue
                        </p>
                        <div className="statistic-data">
                            1500
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }
}

export default Homepage;