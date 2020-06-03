import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                        
                            <span className="navbar-brand" target="_blank"><img src="data:image/png;base64,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" alt="pleodata"></img></span>	
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <span className="nav-link"><Link to="/" className='logoutLink'>Home</Link></span>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <span className="nav-link"><Link to="/register" className='logoutLink'>Register</Link></span>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                         <span className="nav-link"><Link to="/login" className='logoutLink'>Generate QR</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </nav>		
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar