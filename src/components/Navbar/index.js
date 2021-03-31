import React, {Component} from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
            <div className="logo">
              AZ Window Washers
            </div>
            <div className="logo2">
              Call Us - 555.555.5555
            </div>
        </div>
        <div className="navbar-g">
            <div className="logo-g">
              ""
            </div>
        </div>
      </div>
    )
  }
}
 
export default Navbar;