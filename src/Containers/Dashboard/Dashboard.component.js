import React, { useState } from 'react';

import { Navbar, Header, Card } from '../../Components';
import { navbar } from '../../Constants';
import { dimens } from '../../Theme';

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;

const width = (dimens.window.width - padding * 3)/2;

const image = () => {
  const random = Math.floor(Math.random() * 10);

  if(random === 1) return 'https://wallpaperaccess.com/full/1273982.jpg';
  if(random === 3) return 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg';
  if(random === 4) return 'https://wallpaperaccess.com/full/809178.jpg';
  if(random === 7) return 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg';
  return 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg'
}

const DashboardComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState(navbar[0].item);

  let x = 'ajkhkdjhsfhjkahsfjhasjdhjashdkjhsajd'.split('');

  return (
    <div>
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div style={{ padding: `0 ${padding}px`,paddingTop: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', height: dimens.window.height - 110, overflowY: 'scroll' }}>
        { x.map((el, i) => (
          <Card key={i} id={`card-${i}`} style={{ width, marginBottom: 10 }} title='test' desc='testetsetstetstets' src={image(i + 1)} />
        )) }
      </div>
    </div>
  );
};

export default DashboardComponent;