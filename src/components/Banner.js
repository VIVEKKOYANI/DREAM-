import React, { Component } from "react";
import Dhoni from "../images/home_desktop_dhoni.webp";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="banner_inner">
            <div className="middle_brand_info">
              <div className="ipl_partnership"></div>
              <div className="dream11_title">
                <h1>INDIA'S BIGGEST FANTASY SPORTS PLATFORM</h1>
              </div>
              <div className="left_brand_image">
                <img
                  src={Dhoni}
                  alt="Dhoni"
                  style={{ width: `482`, height: `636` }}
                />
              </div>
            </div>
            <div className="cta_box">
              <div className="cashbonus_offer">
                " REGISTER ON OUR APP "
                <div>
                  "TO GET "<span>₹100 BONUS!</span>
                </div>
              </div>

              <div className="desktop_ab_test_exprement">
                <div className="cta_box_inner">
                  <a href="/" id="download_banner_app"></a>
                </div>
              </div>
              <div
                className="mobile_ab_test_exprement"
                style={{ display: `none` }}
              >
                <div className="ab_test_version0">
                  <div className="cta_box_inner">
                    <a href="/" id="download_banner_app"></a>
                  </div>
                </div>
                <div className="ab_test_version1">
                  <div className="cta_box_inner">
                    <a href="/" id="download_banner_app"></a>
                  </div>
                </div>
              </div>
              <div className="cta_tagline">
                  <a href="/" id="lets_play_button">Play Now</a>
              </div>
              <div className="offer_tnc">*Valid only if you download the app through this page</div>
            </div>
            <div className="mobile_overlay"></div>
          </div>
        </div>
        <div className="right_bolt"></div>
      </div>
    );
  }
}

export default Banner;
