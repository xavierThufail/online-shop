import { dimens } from "../../Theme";

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;

const item = (key, selected, i) => ({
  backgroundColor: key === selected ? '#ff85a2' : '#f9c0c0',
  borderRadius: '15px',
  lineHeight: '30px',
  fontWeight: 'bold',
  overflow: 'unset',
  padding: '0 24px',
  color: 'white',
  margin: '10px 5px',
  marginLeft: i === 0 ? '0' : '5px',
  marginBottom: '20px',
  height: '30px'
});

const menu = {
  display: 'flex',
  width: '100vw',
  overflowY: 'scroll',
  padding: `0 ${padding}px`
};

const styles = {
  item,
  menu
};

export default styles;
