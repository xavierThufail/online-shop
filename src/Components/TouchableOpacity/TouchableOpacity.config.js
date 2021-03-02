import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

const displayName = 'TouchableOpacity';

const config = {
  propTypes,
  displayName
};

export default config;
