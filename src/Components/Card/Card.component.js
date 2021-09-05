import React, { useEffect, useRef, useState, useMemo } from "react";
import { Card as AntdCard } from 'antd';

import styles from './Card.style';
import config from './Card.config';
import './Card.component.css';

const { Meta } = AntdCard;

const Card = ({ style, src, title, desc, id, onClick, selectedMenu }) => {

  return (
    <div id='container' style={{display: 'flex', flexDirection: 'column'}} >
      <AntdCard
        hoverable
        style={{...style, marginBottom: 10}}
        cover={<img alt='item' src={src} style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} />}
        onClick={onClick}
      >
        <Meta title={title} description={<p>{desc}</p>} />
      </AntdCard>
      <div style={{height: '100%', backgroundColor: 'pink', borderRadius: 15, marginBottom: 10, backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8eISawPpcfrs3YEAJCd3c6jhO4lqkkuiQQ&usqp=CAU)', boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)'}} />
    </div>
  );
}

Card.displayName = config.displayName;
Card.propTypes = config.propTypes;

export default Card;