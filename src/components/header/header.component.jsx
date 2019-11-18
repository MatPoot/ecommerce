import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="Logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin"></Link>
      )}
      <CartIcon></CartIcon>
    </div>
    <CartDropdown></CartDropdown>
  </div>
);
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
