import React from "react";
import style from "./style.module.css";
import Icon from "../icon/Icon";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <NavLink activeClassName={style.active} to='/profiles'>
          Developers
        </NavLink>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink activeClassName={style.active} to='/profiles'>
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} to='/register'>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} to='/login'>
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className={style.top_nav}>
      <div className={style.search}>
        <Icon width={17} height={16} icon='search' color='default' />
      </div>
      {!loading && (isAuthenticated ? authLinks : guestLinks)}
      <div className={style.account}>
        <div className={style.avatar}></div>
        <Icon width={9} height={5} icon='expand_down' color='default' />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
