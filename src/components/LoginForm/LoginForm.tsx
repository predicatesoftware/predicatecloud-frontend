import React from 'react';
import { Form } from 'reactstrap';
import { History } from 'history';
import Joi from 'joi';
import styles from './styles.module.scss';
import BaseForm from '../BaseForm';
import authService from '../../api/services/authService';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  history: History;
}

export default class LoginForm extends BaseForm<LoginFormProps> {
  state = {
    data: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().min(5).label('Email'),
    password: Joi.string()
      .required()
      .min(8)
      .label('Password')
      .error(() => 'Password should have at least 8 characters.'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);
      window.location.href = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        this.setState({
          errors: {
            ...this.state.errors,
            email: ex.response.data || 'Unexpected error.',
          },
        });
      }
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInputField(
            'email',
            'Email',
            'email@predicatesoftware.com'
          )}
          {this.renderInputField(
            'password',
            'Password',
            '********',
            'password'
          )}
          <div className={styles.controls}>
            <Link to="/login" className="btn btn-link">
              I forgot my password
            </Link>
            {this.renderButton('Sign In')}
          </div>
        </Form>
      </div>
    );
  }
}
