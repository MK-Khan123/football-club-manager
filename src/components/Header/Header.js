import React from 'react';
import logo from '../../images/myFootball.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div> {/*Navbar added using bootstrap 5 for bonus mark*/}
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Features</a>
                                <a class="nav-link" href="#">Pricing</a>
                                <a class="nav-link" href="#" tabindex="-1">Transfer</a>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </div>
            {/*Header Image*/}
            <div className='header'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;