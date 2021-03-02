import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.oneOf(['dashed', 'default', 'text', 'link', 'primary']),
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  type: 'default',
  style: {},
  size: 'default',
  disabled: false
};

const displayName = 'Button';

const config = {
  displayName,
  propTypes,
  defaultProps
};

export default config;
