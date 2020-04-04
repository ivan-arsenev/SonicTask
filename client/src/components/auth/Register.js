import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import styles from "./style.module.css";

const Register = ({ signIn, setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <form className={styles.registration_form} onSubmit={e => onSubmit(e)}>
      <h3>Full Name</h3>
      <input
        type='text'
        value={name}
        name='name'
        placeholder='Enter your full name'
        onChange={e => onChange(e)}
      />
      <h3>Password</h3>
      <input
        type='password'
        value={password}
        name='password'
        placeholder='......'
        onChange={e => onChange(e)}
      />
      <h3>Password again</h3>
      <input
        type='password'
        value={password2}
        name='password2'
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
        <button value='Register' type='submit'>
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <Link to='/'>
          {signIn ? "Register new user" : "I’m already member"}
        </Link>
      </div>
    </form>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
