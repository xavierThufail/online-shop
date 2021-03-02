const item = (key, selected) => ({
  backgroundColor: key === selected ? '#ff85a2' : '#f9c0c0',
  borderRadius: '15px', margin: '10px',
  lineHeight: '30px',
  fontWeight: 'bold',
  overflow: 'unset',
  padding: '0 24px',
  color: 'white',
  height: '30px'
});

const menu = {
  display: 'flex',
  width: '100vw',
  overflowY: 'scroll'
};

const styles = {
  item,
  menu
};

export default styles;
