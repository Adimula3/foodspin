import React from "react";
import '../styles/style.css';

    function Header() {

        return (
                <nav className="navbar navbar-expand-lg d-flex">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://">FoodSpin</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://">Breakfast</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://">lunch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://">Dinner</a>
                            </li>
                        </ul>
                        <div className="right-nav">
                            <i className='bx bx-shopping-bag'></i>
                        </div>
                    </div>
                </nav>

        );
    }

    export default Header;
