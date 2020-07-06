import React from 'react';
import { FormGroup, Label, Input, InputProps } from 'reactstrap';
import styles from './styles.module.scss';

export default ({ name, label, error, ...rest }: InputProps) => {
  return (
    <FormGroup>
      <Label className={styles.label} for={name}>
        {label}
      </Label>
      <Input
        {...rest}
        name={name}
        id={name}
        invalid={error !== undefined}
        className={styles.input}
      ></Input>
      {error && <div className="alert alert-danger">{error}</div>}
    </FormGroup>
  );
};
