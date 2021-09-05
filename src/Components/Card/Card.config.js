import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

const displayName = 'Card';

const config = {
  propTypes,
  displayName
};

export default config;
