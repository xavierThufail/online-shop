import { dimens } from "../../Theme";

const padding = dimens.window.width < 360 ? 10 : dimens.window.width < 414 ? 15 : dimens.window.width < 630 ? 20 : 40;

const header = {
  backgroundColor: 'transparent',
  height: 50,
  padding: `0 ${padding}px`
};

const styles = {
  header
};

export default styles;
