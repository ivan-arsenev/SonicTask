import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import styles from "./style.module.css";
const Login = ({ signIn, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <form className={styles.registration_form} onSubmit={e => onSubmit(e)}>
      <h3>Password</h3>
      <input
        type='password'
        value={password}
        name='password'
        placeholder='......'
        onChange={e => onChange(e)}
      />

      <h3>E-Mail</h3>
      <input
        type='email'
        name='email'
        value={email}
        placeholder='Your e-mail goes here'
        onChange={e => onChange(e)}
      />
      <div
        style={{ display: "flex", marginTop: "110px", alignItems: "center" }}
      >
        <button value='Login' type='submit'>
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <Link to='/'>
          {signIn ? "Register new user" : "I’m already member"}
        </Link>
      </div>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
