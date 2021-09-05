import React from 'react';
import { Carousel as AntdCarousel } from 'antd';

const contentStyle = {
  height: '200px',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '15px',
}

const Carousel = ({ height = '200px', margin, width }) => {
  return (
    <AntdCarousel >
      <div>
        <div style={{...contentStyle, width, height, margin, backgroundImage: 'url(https://wallpaperaccess.com/full/1273982.jpg)'}} />
      </div>
      <div>
        <div style={{...contentStyle, width, height, margin, backgroundImage: 'url(https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg)'}} />
      </div>
      <div>
        <div style={{...contentStyle, width, height, margin, backgroundImage: 'url(https://wallpaperaccess.com/full/809178.jpg)'}} />
      </div>
      <div>
        <div style={{...contentStyle, width, height, margin, backgroundImage: 'url(https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg)'}} />
      </div>
    </AntdCarousel>
  );
};

export default Carousel;

// import React from 'react';
// import { Carousel as AntdCarousel } from 'antd';

// const contentStyle = {
//   height: '200px',
//   color: '#fff',
//   textAlign: 'center',
//   borderRadius: '15px',
// }

// const Carousel = ({ height = '200px', margin, images }) => {
//   return (
//     <AntdCarousel >
//     { images.map((el, i) => (
//       <div key={i}>
//         <div style={{...contentStyle, height, margin, backgroundImage: `url(${el.url};s=${height}x${height})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
//       </div>
//     )) }
//     </AntdCarousel>
//   );
// };

// export default Carousel;