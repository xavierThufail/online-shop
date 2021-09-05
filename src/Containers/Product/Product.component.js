import React, { useState } from 'react';
import { Row, Col } from 'antd';

import { Carousel, Icon, Button } from '../../Components';
import { dimens } from '../../Theme';

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;
const widthCarousel = dimens.window.width*4/5
const height = dimens.window.height - 50 - (padding*3*2)

const ProductComponent = () => {
  const [click, setClick] = useState(false);

  const onFavClick = () => setClick(!click)

  return (
    <Row style={{ padding: `${padding*3}px ${padding}px` }}>
      <Col style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', height }}>
        <div style={{ width: widthCarousel + padding * 2, height: widthCarousel + padding * 2,  position: 'relative' }}>
          <Carousel height={widthCarousel} margin={padding} />
          <Button onClick={onFavClick} style={{ position: 'absolute', bottom: 0, right: '10%', backgroundColor: click ? '#ff85a2' : '#f0f2f5', padding: '6% 4%', borderRadius: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon type='HeartTwoTone' twoToneColor='red' style={{ fontSize: '1rem', marginTop: '.3rem' }} />
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: widthCarousel + padding * 2, padding }}>
          <h1 style={{ fontSize: '1rem', fontWeight: 'bold', lineHeight: 0 }}>Straight Cut Blazer Whole</h1>
          <p style={{ fontSize: '.8rem', fontWeight: 'bold' }}>Outer</p>
          <p style={{ fontSize: '.8rem', lineHeight: 1, textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h2 style={{ fontSize: '.9rem', fontWeight: 'bolder', lineHeight: 1 }}>Rp 300,000</h2>
          <div >
            <Button style={{
              marginTop: '10px',
              padding: '0px 10px',
              height: '50px',
              color: 'white',
              backgroundColor: '#ff85a2',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '13px'
            }}>Masukkan keranjang</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductComponent;


// import React from 'react';
// import { Row, Col } from 'antd';
// import { useLocation } from 'react-router-dom';
// import moment from 'moment'

// import { Carousel, Icon, Button } from '../../Components';
// import { dimens } from '../../Theme';

// const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;
// const widthCarousel = dimens.window.width*4/5
// const height = dimens.window.height - 50 - (padding*3*2)

// const ProductComponent = () => {

//   const { state: { detail } } = useLocation()

//   console.log({ detail })
  
//   if (detail) {
//     return (
//       <Row style={{ padding: `${padding*3}px ${padding}px` }}>
//         <Col style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', height }}>
//           <div style={{ width: widthCarousel + padding * 2, height: widthCarousel + padding * 2,  position: 'relative' }}>
//             <Carousel height={widthCarousel} margin={padding} images={detail.images} />
//             <Button style={{ position: 'absolute', bottom: 0, right: '10%', backgroundColor: '#ff85a2', padding: '6% 4%', borderRadius: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Icon type='HeartTwoTone' twoToneColor='red' style={{ fontSize: '1rem', marginTop: '.3rem' }} />
//             </Button>
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', width: widthCarousel + padding * 2, padding }}>
//             <h1 style={{ fontSize: '1rem', fontWeight: 'bold', lineHeight: 1 }}>{ detail.title }</h1>
//             <p style={{ fontSize: '.8rem', fontWeight: 'bold' }}>{moment(detail.created_at).format('LL')}</p>
//             <p style={{ fontSize: '.8rem', lineHeight: 1, textAlign: 'justify' }}>{ detail.description }</p>
//             <h2 style={{ fontSize: '.9rem', fontWeight: 'bolder', lineHeight: 1 }}>{ detail.price.value.display }</h2>
//             <div >
//               <Button 
//                 style={{
//                   marginTop: '10px',
//                   padding: '0px 10px',
//                   height: '50px',
//                   color: 'white',
//                   backgroundColor: '#ff85a2',
//                   borderRadius: '5px',
//                   fontWeight: 'bold',
//                   fontSize: '13px'
//                 }}
//                 onClick={() => window.location=`https://www.olx.co.id/profile/${detail.user_id}`}
//               >Masukkan keranjang</Button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     ) 
//   } else {
//     return (
//       <Row style={{ padding: `${padding*3}px ${padding}px` }}>
//         <Col style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'column', height }}>
//           <div style={{ width: widthCarousel + padding * 2, height: widthCarousel + padding * 2,  position: 'relative' }}>
//             <Carousel height={widthCarousel} margin={padding} />
//             <Button style={{ position: 'absolute', bottom: 0, right: '10%', backgroundColor: '#ff85a2', padding: '6% 4%', borderRadius: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Icon type='HeartTwoTone' twoToneColor='red' style={{ fontSize: '1rem', marginTop: '.3rem' }} />
//             </Button>
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', width: widthCarousel + padding * 2, padding }}>
//             <h1 style={{ fontSize: '1rem', fontWeight: 'bold', lineHeight: 0 }}>Straight Cut Blazer Whole</h1>
//             <p style={{ fontSize: '.8rem', fontWeight: 'bold' }}>Outer</p>
//             <p style={{ fontSize: '.8rem', lineHeight: 1, textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//             <h2 style={{ fontSize: '.9rem', fontWeight: 'bolder', lineHeight: 1 }}>Rp 300,000</h2>
//             <div >
//               <Button style={{
//                 marginTop: '10px',
//                 padding: '0px 10px',
//                 height: '50px',
//                 color: 'white',
//                 backgroundColor: '#ff85a2',
//                 borderRadius: '5px',
//                 fontWeight: 'bold',
//                 fontSize: '13px'
//               }}>Masukkan keranjang</Button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     )
//   };
// };

// export default ProductComponent;