import React, { Component } from 'react'
import './navbar.css';
import logo from './logo.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span id='logo' className='mx-3'>
                        <img src={logo} alt="logo" />
                    </span>
                    <a className="navbar-brand" href="/">Hooker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
