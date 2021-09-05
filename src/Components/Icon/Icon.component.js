import React from 'react';
import * as IconTypes from '@ant-design/icons/';

const Icon = ({ type = '', style, onClick, twoToneColor }) => {
  const Icons = IconTypes[type];

  return Icons
    ? (<Icons onClick={onClick} style={style} twoToneColor={twoToneColor} />)
    : (<span onClick={onClick} style={{...style, marginLeft: '15px', marginRight: '15px'}}>{type}</span>);
};

Icon.displayName  = 'Icon';

export default Icon;
