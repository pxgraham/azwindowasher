import React, {Component} from 'react';
import './index.css';

class Contact extends Component {
  render() {
    return (
        <div>
            <h1><i className="text-red side-nav-icon far fa-comments"></i> &nbsp;Contact</h1>
            <input className="contact-input" placeholder="name" /> <br />
            <input className="contact-input" placeholder="email address" />
            <textarea className="contact-field" placeholder="message"></textarea> <br />
            <button className="contact-btn">Send</button>
        </div>
    )
  }
}
 
export default Contact;