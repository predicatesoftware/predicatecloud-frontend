import React from 'react';
import Joi from 'joi';
import { Form } from 'reactstrap';
import BaseForm from '../BaseForm';
import { save } from '../../api/services/userService';
import styles from './styles.module.scss';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

interface UserProfileFormProps {
  name: string;
  email: string;
  onSubmit: (name: string, email: string) => void;
}

export default class UserProfileForm extends BaseForm<UserProfileFormProps> {
  state = {
    data: { name: '', email: '' },
    errors: {},
  };

  componentDidMount() {
    const { name, email } = this.props;
    this.setState({ data: { name, email } });
  }

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
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await save(data.name, data.email);
      toast.success('Сохранено!');
      this.props.onSubmit(data.name, data.email);
    } catch (ex) {
      if (ex && ex.response) {
        this.setState({
          errors: { ...this.state.errors, email: 'Что-то пошло не так!' },
        });
      } else {
        toast.error('Что-то пошло не так!');
      }
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Form onSubmit={this.handleSubmit}>
          {this.renderInputField('name', 'Ваше имя', 'Vocab')}
          {this.renderInputField(
            'email',
            'Адрес электронной почты',
            'example@vocab.com'
          )}
          <div className={styles.controls}>
            <Link to="/" className="btn btn-link">
              Я забыл свой пароль
            </Link>
            {this.renderButton('Сохранить')}
          </div>
        </Form>
      </div>
    );
  }
}
