import React from 'react';
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { History } from 'history';
import Joi from 'joi';
import BaseForm from '../BaseForm';
import styles from './styles.module.scss';
import authService from '../../api/services/authService';
import userService from '../../api/services/userService';
import { User } from '../../api/models/user';

interface Props {
  history: History;
  setSettingsContext: (userId: string) => void;
}
export default class RegisterForm extends BaseForm<Props> {
  state = {
    data: { name: '', email: '', password: '', repeatPassword: '' },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label('Name'),
    email: Joi.string().required().email().min(5).label('Email'),
    password: Joi.string()
      .required()
      .min(8)
      .label('Password')
      .error(() => 'Passwords should match and have at least 8 characters.'),
    repeatPassword: Joi.string()
      .min(8)
      .valid(this.state.data.password)
      .required()
      .label('Password')
      .error(() => 'Passwords should match and have at least 8 characters.'),
  };

  componentDidUpdate() {
    this.schema.repeatPassword = Joi.string()
      .min(8)
      .valid(this.state.data.password)
      .required()
      .label('Password')
      .error(() => 'Passwords should match and have at least 8 characters.');
  }

  doSubmit = async () => {
    const { name, email, password } = this.state.data;
    const user: User = { name, email, password };
    try {
      const response = await userService.register(user);
      authService.loginWithJwt(response.headers['x-auth-token']);
      window.location.href = '/';
    } catch (ex) {
      this.setState({
        errors: {
          ...this.state.errors,
          email: ex.response.data || 'Unexpected error.',
        },
      });
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInputField('name', 'Name', 'John Doe')}
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
          {this.renderInputField(
            'repeatPassword',
            'Repeat password',
            '********',
            'password'
          )}
          <div className={styles.controls}>
            <Link to="/login" className="btn btn-link">
              I forgot my password
            </Link>
            {this.renderButton('Sign up')}
          </div>
        </Form>
      </div>
    );
  }
}
