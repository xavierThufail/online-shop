import { colors } from '../../Themes';
import images from '../../Assets/Images';

const title = {
  color: colors.pastel.pink,
  textAlign: 'center',
  fontWeight: 'bold'
};

const content = {
  width: 450,
  backgroundColor: colors.white,
  boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.1)',
  borderRadius: 10,
  padding: '25px',
  margin: '10px',
  position: 'relative'
};

const container = {
  height: '100vh',
  backgroundImage: `url(${images.backgroundLogin})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative'
};

const styles = {
  title,
  content,
  container
};

export default styles;
