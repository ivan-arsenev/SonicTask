import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./style.module.css";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className={styles.landing}>
      <div className={styles.landing_inner}>
        <h1 style={{ fontSize: "3rem" }}>SonicTask</h1>
        <p className={styles.lead}>
          It's your place to put task list and share it with others.
        </p>
        <div className={styles.links}>
          <Link to='/register' className={styles.link_primary}>
            Sign Up
          </Link>
          <Link to='/login' className={styles.link_primary}>
            Login
          </Link>
        </div>
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
