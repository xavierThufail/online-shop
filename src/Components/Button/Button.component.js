import React from 'react';
import { Button as AntDesignButton } from 'antd';

import config from './Button.config';

const Button = ({ type, style, size, onClick, children, disabled }) => (
  <AntDesignButton
    type={type}
    style={style}
    size={size}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </AntDesignButton>
);

Button.propTypes = config.propTypes;
Button.defaultProps = config.defaultProps;
Button.displayName = config.displayName;

export default Button;
