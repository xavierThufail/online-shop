import React from 'react';
import { Input, FormItem } from 'formik-antd';
import { useField } from 'formik';

import config from './PasswordField.config';
import './PasswordField.component.css';

const handleOnChange = setValue => e => setValue(e.target.value);

const TextField = ({ formStyle, inputStyle, placeholder, label, maxLength, ...props }) => {
  const [field, meta, { setValue }] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <FormItem
      validateStatus={isError ? 'error' : ''}
      help={isError ? meta.error : ''}
      label={label}
      colon={false}
      style={formStyle}
    >
      <Input.Password
        style={inputStyle}
        placeholder={placeholder}
        maxLength={maxLength}
        {...field}
        onChange={handleOnChange(setValue)}
        visibilityToggle={false}
      />
    </FormItem>
  );
};

TextField.propTypes = config.propTypes;
TextField.defaultProps = config.defaultProps;
TextField.displayName = config.displayName;

export default TextField;
