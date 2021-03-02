import React from 'react';
import * as IconTypes from '@ant-design/icons/';

const Icon = ({ type = '', style }) => {
  const Icons = IconTypes[type];

  return Icons
    ? (<Icons style={style} />)
    : (<span style={{...style, marginLeft: '15px', marginRight: '15px'}}>{type}</span>);
};

Icon.displayName  = 'Icon';

export default Icon;
