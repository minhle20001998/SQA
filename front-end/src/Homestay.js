import React, { Component } from 'react'
import Homepage from './components/Homepage/Homepage'
import AdminHomepage from './admin-components/Homepage/Homepage'
import AdminBooking from './admin-components/booking/Booking'
import HomestayBooking from './components/HomestayBooking/HomestayBooking'
import Homestays from './admin-components/homestays-admin/Homestays'
import './Homestay.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Homestay extends Component {
    render() {
        return <div className="homestay" >
            <button className="scroll-button"></button>

            <Router>
                <Switch>
                    <Route exact path="/booking">
                        <HomestayBooking />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>

            <Router>
                <Switch>
                    <Route exact path="/admin">
                        <AdminHomepage />
                    </Route>
                    <Route exact path="/admin/booking">
                        <AdminBooking />
                    </Route>
                    <Route exact path="/admin/homestays">
                        <Homestays />
                    </Route>
                </Switch>
            </Router>
        </div>
    }
}
export default Homestay;
