import { fonts, colors } from '../../../Themes';

const label = {
  fontSize: fonts.size.regular,
  fontWeight: fonts.weight.bold,
  color: colors.warmGrey
};

const input = {
  height: '50px',
  borderRadius: '5px'
};

const form = {
  flexDirection: 'column',
  alignItems: 'start'
};

const btnSubmit = {
  width: '100%', 
  marginTop: '10px',
  padding: '0px 10px',
  height: '50px',
  color: colors.white,
  backgroundColor: colors.pastel.pink,
  borderRadius: '5px',
  fontWeight: 'bold',
  fontSize: '13px'
};

const styles = {
  label,
  input,
  form,
  btnSubmit
};

export default styles;
