import React, {Component} from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
        <div>
            <h1><i className="text-blue side-nav-icon fas fa-home"></i> &nbsp;Welcome to AZ Window Washers</h1>
              <p>Professional Window Cleaning Services</p>
              <div className="space s">
                <h2>Residential</h2>
                <h2>Commercial</h2>
                <h2>Get a Quote</h2>
              </div>
        </div>
    )
  }
}
 
export default Home;