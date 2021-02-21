import React, { Component } from 'react'
import Homepage from './components/Homepage/Homepage'
import HomestayBooking from './components/HomestayBooking/HomestayBooking'
import './Homestay.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Homestay extends Component {
    render() {
        return <div className="homestay">
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
        </div>
    }
}
export default Homestay;
