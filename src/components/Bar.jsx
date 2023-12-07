import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Bar.scss'
function Bar() {
    return (
        <div className="bg-body-tertiary col-lg-auto col-sm-1 d-flex flex-column justify-content-between  min-vh-100 border border-right p-0">
            <Container className=''>
                <Navbar.Brand href="#home" className="d-flex justify-content-center mt-3">
                    <img
                        alt="logo"
                        src="logo1.png"
                        width="40"

                    />{' '}
                </Navbar.Brand>
                <hr />
                <ul className='nav nav-pills flex-column flex-column-shrink-0'>
                    <li className='nav-item'>
                        <a href="#control" className='nav-link d-flex justify-content-center active' aria-current='page'><i className="bi fa-3x bi-house"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href="#control" className='nav-link d-flex justify-content-center ' aria-current='page'><i className="bi fa-3x bi-speedometer2"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href="#control" className='nav-link d-flex justify-content-center ' aria-current='page'><i className="bi fa-3x bi-table"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href="#control" className='nav-link  d-flex justify-content-center' aria-current='page'><i className="bi fa-3x bi-database"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href="#control" className='nav-link d-flex justify-content-center' aria-current='page'><i className="bi fa-3x bi-circle-half"></i></a>
                    </li>
                </ul>



            </Container>
            <div className="dropdown-center open d-flex flex-shrink-0 mb-3 mx-auto" data-bs-theme="dark">
                <a className="member text-decoration-none dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i className="bi fa-5x bi-person-circle"></i>
                </a>
                <div className="dropdown-menu " aria-labelledby="triggerId">
                    <a className="dropdown-item" href="#">New project...</a>
                    <a className="dropdown-item " href="#">Settings</a>
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item border-top text-warning" href="#">Sign out</a>
                </div>
            </div>
        </div>

    );
};

export default Bar;