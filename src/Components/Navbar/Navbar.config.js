import PropTypes from 'prop-types';

const propTypes = {
  selectedMenu: PropTypes.string.isRequired,
  setSelectedMenu: PropTypes.func.isRequired
};

const displayName = 'Navbar';

const config = {
  propTypes,
  displayName
};

export default config;
