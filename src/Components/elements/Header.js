import React from "react";
import "./Header.scss";

// 1. Learn how to create a styled basic styled component
// 2. Learn how to handle props in styled component
// 3. Create a global style with styled components

const Header = () => (
  <section className="header-section">
    <div className="header__bar">
      <div className="header__bar--nav">
        <i class="fa fa-bars hidden-xs"></i>
        <img
          className="logo"
          src="https://demo.themeum.com/wordpress/moview/wp-content/themes/moview/images/logo.png"
          alt="logo"
        />
      </div>
      <div className="search-box">
        <form className="search-form">
          <select className="search-option">
            <option value="sdgsg">Movies</option>
            <option value="sdgsg">Actor</option>
            <option value="sdgsg">Sescriptor</option>
          </select>
          <input type="text" className="search-field" />
          <i class="fas fa-search"></i>
        </form>
      </div>

      <div class="top-user-login">
        <i class="far fa-user"></i>
        <span class="hidden-xs hidden-sm">Welcome Guest! </span>
        <a href="#sign-in" data-toggle="modal" data-target="#sign-in">
          Login
        </a>
      </div>
    </div>
  </section>
);

export default Header;
