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
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .label('Адрес электронной почты')
      .error(() => 'Адрес электронной почты должен быть корректным.'),
    password: Joi.string()
      .required()
      .min(8)
      .label('Пароль')
      .error(() => 'Пароль должен содержать минимум 8 символов.'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);
      this.props.history.push('/');
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
          {this.renderInputField('password', 'Пароль', '********', 'password')}
          <div className={styles.controls}>
            <Link to="/login" className="btn btn-link">
              Я забыл свой пароль
            </Link>
            {this.renderButton('Войти')}
          </div>
        </Form>
      </div>
    );
  }
}
