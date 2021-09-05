import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

import { Navbar, Card, Carousel } from '../../Components';
import { navbar } from '../../Constants';
import { dimens } from '../../Theme';

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;
const widthCarousel = dimens.window.width*4/5
const width = (dimens.window.width - padding * 3)/2;

const products = [
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://wallpaperaccess.com/full/809178.jpg',
    category: 'Atasan'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg',
    category: 'Atasan'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg',
    category: 'Atasan'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg',
    category: 'Atasan'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://wallpaperaccess.com/full/809178.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://wallpaperaccess.com/full/1273982.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg',
    category: 'Celana'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.pinimg.com/474x/7d/d0/08/7dd008c07b556d120b5911a3db104390.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://s.itl.cat/pngfile/s/94-942946_turquoise-color-iphone-wallpaper-pastel-colors-gradient-orange.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://wallpaperaccess.com/full/1273982.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://wallpaperaccess.com/full/809178.jpg',
    category: 'Outer'
  },
  {
    title: 'Straight Cut Blazer Whole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://ih1.redbubble.net/image.337782407.7206/flat,750x1000,075,f.u3.jpg',
    category: 'Outer'
  },
];

const DashboardComponent = ({ selectedMenu }) => {
  const { push } = useHistory();
  const [productsRender, setProductsRender] = useState(products.filter(product => product.category === selectedMenu));

  useEffect(() => {
    setProductsRender(products.filter(product => product.category === selectedMenu))
  }, [selectedMenu])

  return (
    <Row style={{ padding: `0 ${padding}px` }}>
      <Col style={{ paddingTop: 10, overflowY: 'scroll', height: dimens.window.height - 110 }}>
        <Carousel width={'100%'} margin={`0 0 ${padding}px 0`} />
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          { productsRender.map((el, i) => (
            <Card selectedMenu={selectedMenu} key={i} id={`card-${selectedMenu}-${i}`} style={{ width }} title={el.title} desc={el.desc} src={el.image} onClick={() => push(`/product/${i + 1}`, { fromDashboard: true })} />
          )) }
        </div>
      </Col>
    </Row>
  );
};

export default DashboardComponent;


// import React, { useState, useEffect } from 'react';
// import { Row, Col } from 'antd';
// import { useHistory } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroller';
// import moment from 'moment'

// import { Navbar, Card } from '../../Components';
// import { navbar } from '../../Constants';
// import { dimens } from '../../Theme';

// const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;

// const width = (dimens.window.width - padding * 3)/2;

// const DashboardComponent = ({ selectedMenu }) => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1)

//   const generateLink = (query, page) => `https://api.olx.co.id/relevance/v2/search?facet_limit=100&clientId=pwa&location_facet_limit=100&spellcheck=true&query=${query}&location=1000001&page=${page}&clientVersion=7.0.0&user=173dd03c0d3x7fd1aa87&platform=web-desktop`

//   const { push } = useHistory();

//   const rawFetch  = (query, page) => {
//     const link = generateLink(query, page);

//     return fetch(link)
//       .then(response => response.json())
//   }

//   const fetchData = async (query, page = 1) => {
//     try {
//       const response = await rawFetch(query, page);
//       const newData = response?.data.filter(el => moment().format('LL') == moment(el.created_at).format('LL'));
//       // setData(newData.length < 6 ? response?.data : newData)
//       console.log({newData, response: response?.data.filter(el => !el.package)})
//       setData(response?.data)
//       setPage(page + 1);
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const fetchMore = (query, page = 1) => async () => {
//     try {
//       const response = await rawFetch(query, page);
//       // const newData = response?.data.filter(el => moment().format('LL') == moment(el.created_at).format('LL'));
//       setData([...data, ...response?.data]);
//       setPage(page + 1);
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   useEffect(() => {
//     fetchData(selectedMenu, page)
//   }, [selectedMenu])

//   return (
//     <Row style={{ padding: `0 ${padding}px` }}>
//       <Col>
//         <div style={{ paddingTop: 10, height: dimens.window.height - 110, overflowY: 'scroll' }}>
//           <InfiniteScroll
//             pageStart={0}
//             loadMore={fetchMore(selectedMenu, page)}
//             hasMore={true}
//             loader={<div className="loader" key={0}>Loading ...</div>}
//             useWindow={false}
//             style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
//           >
//             { data.length > 0 && data.filter(el => !el.package).map((el, i) => (
//               <Card selectedMenu={selectedMenu} key={i} id={`card-olx-${i}`} style={{ width, marginBottom: 10 }} title={el?.title} desc={el.price?.value?.display} src={el.images[0].full.url} onClick={() => push({ pathname: `/product/${i + 1}`, state: { detail: el } })} />
//             )) }
//           </InfiniteScroll>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default DashboardComponent;