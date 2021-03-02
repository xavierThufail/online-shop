import PropTypes from 'prop-types';

const propTypes = {
  inputStyle: PropTypes.object,
  formStyle: PropTypes.object,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number
};

const defaultProps = {
  label: '',
  style: {},
  placeholder: ''
};

const displayName = 'TextField';

const config = {
  propTypes,
  defaultProps,
  displayName
};

export default config;
