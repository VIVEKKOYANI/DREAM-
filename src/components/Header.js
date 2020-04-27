import React, { Component } from "react";
import Logo from '../images/logo.webp';
import '../css/Header.css'

class Header extends Component {
  render() {
    return (
      <>
        <header>
            <div className="container">
                <div className="logo_box">
                    <img src={Logo} alt="LOGO" />
                </div>
                <div className="right_user_info">
                    <ul>
                        <li className="hide_in_mobile">
                            <span>Have a Referral Code?</span>
                            <a className="invite" id="desktop_header_download_app" href="/" target="_blank">Download App</a>
                        </li>
                        <li className="login login_register">
                            <a href="/">LOG IN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
      </>
    );
  }
}

export default Header;
