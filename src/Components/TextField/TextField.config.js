import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.object,
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

export default {
  propTypes,
  defaultProps,
  displayName
};
