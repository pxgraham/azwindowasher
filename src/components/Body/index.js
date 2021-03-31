import React from 'react';
import './index.css';
import Home from '../../Pages/Home';
import Contact from '../../Pages/Contact';
import About from '../../Pages/About';

class Body extends React.Component {
    state = {
        page: 'home',
    }
    switchPage = (page, element) => {        
        for(let i = 0; i < document.getElementsByClassName('nav-active').length; i++) {
            document.getElementsByClassName('nav-active')[i].classList.remove('nav-active')
        }
        element.target.classList.add('nav-active');
        this.setState({page: page})
    }
  render() {
    return (
      <div>
        <div className="side-nav-small">
            <button onClick={(btn) => {this.switchPage('home', btn)}} className="side-nav-small-btn"><i className="text-blue side-nav-icon fas fa-home"></i></button>
            <button onClick={(btn) => {this.switchPage('contact', btn)}} className="side-nav-small-btn"><i className="text-red side-nav-icon far fa-comments"></i></button>
            <button onClick={(btn) => {this.switchPage('about', btn)}}className="side-nav-small-btn"><i className="side-nav-icon fas fa-book-open"></i></button>
            <button onClick={() => {window.location.href = "tel:5555555555"}} className="side-nav-small-btn"><i class="text-blue fa fa-phone" aria-hidden="true"></i></button>
            <button onClick={() => {window.location.href = "mailto:test@email.com"}} className="side-nav-small-btn"><i className="text-blue fas fa-envelope"></i></button>
        </div>
        <div className="side-nav">
            <div className="nav-link">
                <button className="side-nav-btn nav-active" onClick={(btn) => {this.switchPage('home', btn)}}>
                    <i className="text-blue side-nav-icon fas fa-home"></i>&nbsp;&nbsp;&nbsp; Home
                </button>
            </div>
            <div className="nav-link">
                <button className="side-nav-btn" onClick={(btn) => {this.switchPage('contact', btn)}}>
                    <i className="text-red side-nav-icon far fa-comments"></i>&nbsp;&nbsp;&nbsp; Contact
                </button>
            </div>
            <div className="nav-link">
                <button className="side-nav-btn" onClick={(btn) => {this.switchPage('about', btn)}}>
                    <i className="side-nav-icon fas fa-book-open"></i>&nbsp;&nbsp;&nbsp; About
                </button>
            </div>
            <div className="nav-link-bottom-container">
                <div className="nav-link-bottom">
                    <a href="tel:5555555555">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="nav-link-bottom">
                    <a href="mailto:test@hi.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>


        <div className="body">
            <div className="side-nav-g">
                ""
            </div>
            <div className="main-content">
                <div className="container">
                    {
                        this.state.page === "home"
                        ?
                        <Home />
                        :

                        this.state.page === "contact"
                        ?   
                        <Contact />
                        : 

                        this.state.page === "about" 
                        ?  
                        <About />
                        :   <div>404 page</div>
                }
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Body;