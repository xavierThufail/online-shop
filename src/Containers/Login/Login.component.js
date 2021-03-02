import React from 'react';
import { Formik } from 'formik';
import { Col, Row } from 'antd';

import { Forms } from './Forms';
import { Button } from '../../Components';
import images from '../../Assets/Images';
import styles from './Login.style';
import './Login.component.css';

const renderForms = ({ form, setForm, handleLogin, initialValues }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleLogin}
  >
    {formikProps => <Forms {...formikProps} type={form} setForm={setForm} />}
  </Formik>
);

const renderBackButton = ({ setForm }) => (
  <Button
    type='link'
    onClick={() => setForm(null)}
    style={{ padding: 0, paddingLeft: 0, color: '#f9c0c0', fontWeight: 'bold', position: 'absolute', top: 5, right: 10 }}
  ><span style={{fontSize: '20px'}}>X</span></Button>
);

const renderFormTitle = ({ form }) => (
  <h1
  style={styles.title}
  >
    {form}
  </h1>
);

const renderLanding = ({ setForm }) => (
  <div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Button
        type='default'
        size='large'
        style={{ marginBottom: 25, borderRadius: '5px', backgroundColor: '#f9c0c0', color: 'white', fontWeight: 'bold' }}
        onClick={() => setForm('Login')}
      >
        Login
      </Button>
      <Button
        type='default'
        size='large'
        style={{ marginBottom: 25, borderRadius: '5px', backgroundColor: '#f9c0c0', color: 'white', fontWeight: 'bold' }}
        onClick={() => setForm('Register')}
      >
        Register
      </Button>
    </div>
  </div>
);

const renderLogo = () => (
  <Col style={{
    width: 150,
    boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '5px 0',
    margin: '10px',
    position: 'absolute',
    top: 0,
    right: 0
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <img src={images.logo} style={{ width: '50%' }} alt='logo' />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{fontSize: '5vw', fontWeight: 'bold'}}>CE</span>
        <span style={{fontSize: '5vw', fontWeight: 'bold'}}>NUY</span>
        <span style={{fontSize: '5vw', fontWeight: 'bold'}}>STORE</span>
      </div>
    </div>
  </Col>
)

const renderContent = ({ form, setForm, handleLogin, initialValues }) => (
  <Col
    style={{...styles.content, paddingBottom: form ? '25px' : '0px'}}
  >
    {!form && renderLanding({ setForm })}
    {form && renderFormTitle({ form })}
    {form && renderBackButton({ setForm })}
    {form && renderForms({ form, setForm, handleLogin, initialValues })}
  </Col>
);

const LoginComponent = ({ form, setForm, handleLogin, initialValues }) => (
  <Row
    justify='center'
    align={form ? 'middle' : 'bottom'}
    style={styles.container}
  >
    {!form && renderLogo()}
    {renderContent({ form, setForm, handleLogin, initialValues })}
  </Row>
);

export default LoginComponent;
