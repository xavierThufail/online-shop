import React, { useState } from 'react';
import { Row, Col, Steps } from 'antd';
import { Formik } from 'formik';
import { Form } from 'formik-antd';

import { Button, Icon, TextField } from '../../Components';
import { dimens } from '../../Theme';

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;
const widthCarousel = dimens.window.width*4/5
const width = (dimens.window.width - padding * 3)/2;

const { Step } = Steps;

const RenderCartCard = ({ changeTotal, marginRight, disableClick }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    if(!disableClick) {
      if(select) {
        changeTotal(399000, 'min')
      } else {
        changeTotal(399000, 'sum')
      }
      setSelect(!select);
    }
  }

  return (
    <div onClick={handleSelect} style={{ width: '98%', height: 150, backgroundColor: select ? 'pink' : '', display: 'flex', alignItems: 'center', padding: '10px', paddingRight: '30px', borderRadius: 25, boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)', justifyContent: 'space-between', marginBottom: padding/2, marginTop: padding/2, marginRight }}>
      <div style={{ height: '100%', display: 'flex', width: '100%' }}>
        <img style={{ borderRadius: 20 }} src='https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg' alt='gambar-cart' height='100%' />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '20px 10px' }}>
          <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold'}}>Straight Cut Blazer Wholesale</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '150px' }}>
            <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Rp 399,000</p>
            <div style={{ backgroundColor: 'grey', padding: 5, borderRadius: 100 }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold'}}>3x</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const AddressForm = (formikProps) => {
  const renderLabel = label => (
    <div
      style={{ fontSize: '1rem', fontWeight: 'bold', color: 'grey' }}
    >{label}</div>
  );

  const input = {
    height: '50px',
    borderRadius: '5px'
  };
  
  const form = {
  };

  return (
    <Form style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('Address')}
        name={'address'}
        placeholder={'Jl. Kepodang'}
        {...formikProps}
      />
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('Province')}
        name={'province'}
        placeholder={'DKI Jakarta'}
        {...formikProps}
      />
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('City')}
        name={'city'}
        placeholder={'Jakarta Pusat'}
        {...formikProps}
      />
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('District')}
        name={'district'}
        placeholder={'Tanah Abang'}
        {...formikProps}
      />
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('Sub-district')}
        name={'subDistrict'}
        placeholder={'Bendungan Hilir'}
        {...formikProps}
      />
      <TextField
        inputStyle={input}
        formStyle={form}
        label={renderLabel('Zip Code')}
        name={'zipCode'}
        placeholder={'12345'}
        {...formikProps}
      />
    </Form>
  )
}

const CartComponent = () => {
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(0);
  const [max, setMax] = useState(0);
  const titleBtn = ['Checkout', 'Add Address', 'Confirm and Pay']

  const toRupiahFormat = (amount) => `Rp ${amount}`
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const changeTotal = (amount, type) => {
    if(type === 'sum') {
      setTotal(total + amount);
    } else {
      setTotal(total - amount)
    }
  };

  const handleNext = () => {
    setStep(step + 1);
    setMax(max + 1);
  };

  return (
    <Row style={{ padding: `0 ${padding}px`, height: '100%', display: 'flex' }}>
      <Col style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* <h2 style={{ textAlign: 'center', fontSize: '1rem' }}>CART</h2> */}
        <Steps size="small" current={step} style={{ marginBottom: 10 }}>
          <Step onClick={() => setStep(max >= 0 ? 0 : step)} title='Cart' />
          <Step onClick={() => setStep(max >= 1 ? 1 : step)} title='Address' />
          <Step onClick={() => setStep(max >= 2 ? 2 : step)} title='Payment' />
        </Steps>
        {<div style={{ overflowY: 'scroll', display: `${step === 0 ? 'flex' : 'none'}`, flexDirection: 'column', alignItems: 'center', height: dimens.window.height - 110 - 110}}>
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
          {RenderCartCard({ changeTotal })}
        </div>}
        {<div style={{ height: step === 1 ? (dimens.window.height - 150) : (dimens.window.height - 220), display: `${step === 1 ? 'flex' : 'none'}`, overflowY: 'scroll', width: '100%' }}>
          <Formik
            initialValues={{
              address: '',
              province: '',
              city: '',
              district: '',
              subDistrict: '',
              sipCode: ''
            }}
            onSubmit={() => {}}
          >
            {formikProps => <AddressForm {...formikProps} />}
          </Formik>
        </div>}
        {<div style={{ height: step === 1 ? (dimens.window.height - 150) : (dimens.window.height - 220), display: `${step === 2 ? 'flex' : 'none'}`, width: '100%', flexDirection: 'column' }}>
          <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold'}}>Item</p>
          <div style={{ display: 'flex', overflowY: 'scroll', padding: '0 5px' }}>
            {RenderCartCard({ changeTotal, marginRight: '5px', disableClick: true })}
            {RenderCartCard({ changeTotal, marginRight: '5px', disableClick: true })}
            {RenderCartCard({ changeTotal, marginRight: '5px', disableClick: true })}
            <div style={{width: 5, height: 5, color: 'transparent'}}>t</div>
          </div>
          <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold'}}>Address</p>
          <div style={{width: '100%', margin: '10px 0' }} >
            <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Jl. Kepodang blok C23/21 RT 002/002 Kel. Pamulang Kec. Menteng Kodepos 10283</p>
          </div>
          <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold'}}>Payment</p>
          <div style={{ width: '100%', margin: '10px 0' }} >
            <div style={{ width: '100%', backgroundColor: 'pink', padding: 10, marginBottom: 10, borderRadius: 15 }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Credit Card</p>
            </div>
            <div style={{ width: '100%', backgroundColor: 'pink', padding: 10, marginBottom: 10, borderRadius: 15 }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Debbit Card</p>
            </div>
            <div style={{ width: '100%', backgroundColor: 'pink', padding: 10, marginBottom: 10, borderRadius: 15 }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Paypal</p>
            </div>
            {/* <div style={{ width: '100%', backgroundColor: 'pink', padding: 10, marginBottom: 10 }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0}}>Alfamart/Indomaret</p>
            </div> */}
          </div>
        </div>}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: `${padding/ 2}px` }}>
          { (step === 0 || step === 2) &&
          <div style={{ display:'flex', height: '100%', alignItems: 'center', margin: `0 0 ${padding/ 2}px 0` }}>
            <div style={{ backgroundColor: 'grey', padding: 10, height: '100%', borderRadius: 10, marginRight: padding }}>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold', color: 'white'}} >FREE</p>
              <p style={{fontSize: '1rem', lineHeight: 1, marginBottom: 0, fontWeight: 'bold', color: 'white'}} >SHIP</p>
            </div>
            <div style={{ display:'flex', height: '100%', flexDirection: 'column' }}>
              <p style={{fontSize: '1rem', lineHeight: 1.7, marginBottom: 0}}>Total:</p>
              <p style={{fontSize: '1rem', lineHeight: 1.7, marginBottom: 0, fontWeight: 'bold'}}>{toRupiahFormat(total)}</p>
            </div>
          </div>}
          <Button style={{
            backgroundColor: 'pink',
            color: 'white',
            borderRadius: '10px',
            fontSize: '1rem',
            height: '50px',
            padding: '0px 10px',
            fontWeight: 'bold'}}
            onClick={handleNext}
            >
              {titleBtn[step]}
            </Button>
        </div>
      </Col>
    </Row>
  );
};

export default CartComponent;