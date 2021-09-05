import { dimens } from "../../Theme";
import { navbar } from '../../Constants';

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;

const item = (color, i) => ({
  backgroundColor: color,
  borderRadius: '15px',
  lineHeight: '30px',
  fontWeight: 'bold',
  overflow: 'unset',
  padding: '0 24px',
  color: 'white',
  margin: '10px 5px',
  marginLeft: i === 0 ? '0' : '5px',
  marginRight: i === navbar.length - 1 ? '0' : '5px',
  marginBottom: '20px',
  height: '30px'
});

const menu = {
  display: 'flex',
  width: '100%',
  overflowY: 'scroll',
  paddingLeft: `${padding}px`,
  backgroundColor: 'transparent',
};

const last = {
  padding: `0 ${padding/2}px`
};

const styles = {
  item,
  menu,
  last
};

export default styles;
