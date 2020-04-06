import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./style.module.css";
import { ReactComponent as Scene } from "./Scene/Wireframe.svg";
import Register from "../auth/Register";
import Login from "../auth/Login";

const LandingLinks = ({ signIn, setSignIn }) => {
  return (
    <div className={styles.links}>
      <div
        onClick={() => {
          setSignIn(!signIn);
        }}
        className={styles.landing_link + " " + (signIn ? styles.sign_in : "")}
      >
        Sign In
      </div>
      <span> or</span>
      <div
        onClick={() => setSignIn(!signIn)}
        className={styles.landing_link + " " + (!signIn ? styles.sign_in : "")}
      >
        Sign Up
      </div>
      {signIn ? <Redirect to='./login' /> : <Redirect to='./register' />}
    </div>
  );
};

const Landing = ({ isAuthenticated }) => {
  const [signIn, setSignIn] = useState(true);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className={styles.landing}>
      <div className={styles.landing_left}>
        <LandingLinks signIn={signIn} setSignIn={setSignIn} />
        {signIn ? <Login signIn={signIn} /> : <Register signIn={signIn} />}
      </div>
      <div className={styles.landing_right}>
        <h3>Plan your activities and control your progress online</h3>
        <Scene />
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
