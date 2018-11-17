import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Formik } from 'formik';

import setSession from '../actions/action-set-session'
import './Login.css';


class Login extends Component {
  validate (values) {
    let errors = {};
    if (!values.password) {
      errors.password = '* Requerido';
    }
    if (!values.email) {
      errors.email = '* Requerido';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = '* Formato de email invalido';
    }
    return errors;
  }
  checkUserPassword (values, { setSubmitting }) {
    if (
      this.props.users.map(u=>u.email).includes(values.email)
      && this.props.users.find(u=>u.email === values.email).password === values.password
    ) {
      let username = this.props.users.find(u=>u.email === values.email).username
      this.props.setSession(username)
    } else {
      alert('Combinación email y password invalida')
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  }
  render() {
    return (
      <div id="box">
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={this.validate.bind(this)}
          onSubmit={this.checkUserPassword.bind(this)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="escribe tu email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="error">{errors.email && touched.email && errors.email}</div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="escribe tu password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div className="error">{errors.password && touched.password && errors.password}</div>
              <button type="submit" disabled={isSubmitting}>
                Entrar
              </button>
            </form>
          )}
        </Formik>
        <div id="pista">
          <div>e: ralex@email.com - p: 123456789</div>
          <div>e: alguien@email.com - p: 987654321</div>
          <div>e: admin@email.com - p: admin</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSession}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
