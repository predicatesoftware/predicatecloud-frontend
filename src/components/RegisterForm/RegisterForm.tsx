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

interface RegisterFormProps {
  history: History;
  setSettingsContext: (userId: string) => void;
}
export default class RegisterForm extends BaseForm<RegisterFormProps> {
  state = {
    data: { name: '', email: '', password: '', repeatPassword: '' },
    errors: {},
  };

  schema = {
    name: Joi.string()
      .required()
      .label('Ваше имя')
      .error(() => 'Имя не может быть пустым.'),
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
      .error(() => 'Пароли должны содержать минимум 8 символов и совпадать.'),
    repeatPassword: Joi.string()
      .min(8)
      .valid(this.state.data.password)
      .required()
      .label('Пароль')
      .error(() => 'Пароли должны содержать минимум 8 символов и совпадать.'),
  };

  componentDidUpdate() {
    this.schema.repeatPassword = Joi.string()
      .min(8)
      .valid(this.state.data.password)
      .required()
      .label('Пароль')
      .error(() => 'Пароли должны содержать минимум 8 символов и совпадать.');
  }

  doSubmit = async () => {
    const { name, email, password } = this.state.data;
    const user: User = { name, email, password };
    try {
      const response = await userService.register(user);
      authService.loginWithJwt(response.headers['x-auth-token']);
      this.props.history.push('/');
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
          {this.renderInputField('name', 'Ваше имя', 'John Doe')}
          {this.renderInputField(
            'email',
            'Адрес электронной почты',
            'email@predicatesoftware.com'
          )}
          {this.renderInputField('password', 'Пароль', 'password')}
          {this.renderInputField(
            'repeatPassword',
            'Повторите пароль',
            '********',
            'password'
          )}
          <div className={styles.controls}>
            <Link to="/" className="btn btn-link">
              Я забыл свой пароль
            </Link>
            {this.renderButton('Создать')}
          </div>
        </Form>
      </div>
    );
  }
}
