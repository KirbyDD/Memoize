import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header>
        <div className="gun-logo">
          <img
            src="https://www.aeroprecisionusa.com/media/catalog/product/cache/8a4e8be590f5e34deaab5118a0859ee5/a/p/aprh100033-m4-sliding-stock-1_1.jpg"
            className="logo-stock"
          />
          <h1>Scope Practice</h1>
          <img
            src="http://tradingplacepawn.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/a/lantac-dragon-3.jpg"
            className="logo-muzzle"
          />
        </div>
        <img
          src="https://image.sportsmansguide.com/adimgs/l/reticle_445_ts.jpg"
          alt="Weapon scope crosshair"
        />
      </header>
    );
  }
}

export default Header;
