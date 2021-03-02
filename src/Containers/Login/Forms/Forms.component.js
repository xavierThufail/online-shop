import React from 'react';
import { Form, SubmitButton } from 'formik-antd';

import { TextField, PasswordField, Button } from '../../../Components';
import { email, password } from '../../../Constants/form';
import config from './Forms.config';
import styles from './Forms.style';

const renderLabel = (label) => (
  <div
    style={styles.label}
  >
    {label}
  </div>
);

const renderEmail = formikProps => (
  <TextField 
    inputStyle={styles.input}
    formStyle={styles.form}
    label={renderLabel(email.label)} 
    name={email.name}
    placeholder={email.placeholder}
    {...formikProps} />
);

const renderPassword = (formikProps, type) => (
  <PasswordField 
    inputStyle={styles.input}
    formStyle={styles.form}
    label={renderLabel(type ? 'Konfirmasi Password' : password.label)} 
    name={password.name}
    placeholder={password.placeholder}
    {...formikProps} />
);

const renderBtnSubmit = formikProps => {
  const disabled = false;

  return (
    <SubmitButton
      style={styles.btnSubmit}
      disabled={disabled || formikProps.isSubmitting}
      onClick={formikProps.handleSubmit}
    >MASUK</SubmitButton>
  );
};

const renderSwitchForm = (type, setForm) => (
  <div>
    <span>{type === 'Register' ? 'Sudah punya akun?' : 'Belum punya akun?'}</span>
    <Button
      type='link'
      onClick={() => setForm(type === 'Register' ? 'Login' : 'Register')}
      style={{ padding: 0, paddingLeft: 5, color: '#f9c0c0', fontWeight: 'bold' }}
    >Klik disini!</Button>
  </div>
)

const Forms = ({type, setForm, ...formikProps}) => (
  <Form>
    {renderEmail(formikProps)}
    {renderPassword(formikProps)}
    {type === 'Register' && renderPassword(formikProps, type)}
    {renderBtnSubmit(formikProps)}
    {renderSwitchForm(type, setForm)}
  </Form>
);

Forms.displayName = config.displayName;

export default Forms;
