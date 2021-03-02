import React, { useEffect, useRef, useState } from "react";
import { Card as AntdCard } from 'antd';

import styles from './Card.style';
import config from './Card.config';
import './Card.component.css';

const { Meta } = AntdCard;

const Card = ({ style, src, title, desc, id }) => {
  const cardRef = useRef(null);
  const [display, setDisplay] = useState('inherit');

  useEffect(() => {
    if (cardRef.current.offsetHeight < 10) {
      setDisplay('none')
    };
  }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <AntdCard
        hoverable
        style={style}
        cover={<img alt='item' src={src} style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} />}
      >
        <Meta title={title} description={desc}  />
      </AntdCard>
      <div id={id} ref={cardRef} style={{display, height: '100%', borderRadius: 15, marginBottom: 10, backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8eISawPpcfrs3YEAJCd3c6jhO4lqkkuiQQ&usqp=CAU)', boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)'}} />
    </div>
  );
}

Card.displayName = config.displayName;
Card.propTypes = config.propTypes;

export default Card;