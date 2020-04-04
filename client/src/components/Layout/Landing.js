import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./style.module.css";
import { ReactComponent as Scene } from "./Scene/Wireframe.svg";

const RegistrationForm = ({ signIn }) => {
  return (
    <form className={styles.registration_form} autoComplete='off'>
      <h3>Full Name</h3>
      <input
        type='text'
        autoComplete='off'
        placeholder='Enter your full name'
      />
      <h3>Password</h3>
      <input type='password' autoComplete='off' placeholder='......' />

      <h3>E-Mail</h3>
      <input type='email' placeholder='Your e-mail goes here' />
      <div
        style={{ display: "flex", marginTop: "110px", alignItems: "center" }}
      >
        <button onClick={() => console.log("click")}>
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <Link to='/register'>
          {signIn ? "Register new user" : "I’m already member"}
        </Link>
      </div>
    </form>
  );
};

const LandingLinks = ({ signIn, setSignIn }) => {
  return (
    <div className={styles.links}>
      <div
        onClick={() => setSignIn(!signIn)}
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
        <RegistrationForm signIn={signIn} />
      </div>
      <div className={styles.landing_right}>
        <h3>Plan your activities and control your progress online</h3>
        <Scene />
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated
  isAuthenticated: false
});

export default connect(mapStateToProps)(Landing);
