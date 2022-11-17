import React from "react";
import '../header/header.css'
import Logo from '../images/logo.jpg'
const Header = () => {
    return (
        <>
            <div className="container-header">
                <div className="header-box">
                    <img src={Logo} alt='logo-images' />
                    <h1 className="header">
                        Eshop Spot
                    </h1>
                </div>
            </div>


        </>
    )
}

export default Header;