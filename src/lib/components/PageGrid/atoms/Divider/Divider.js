import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import Storyblok from 'lib/utils/Storyblok';
import transitions from './Divider.module.scss';

export const Divider = ({
  width,
  dataBlokC,
  dataBlokUid,
  thickness,
  lineStyle,
  color,
  borderRadius,
  transition,
  preSetStyle,
  rootClass,
  lineHeight,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const border = thickness.concat(' ', lineStyle, ' ', color);
  const customStyles = Storyblok.anchorOrginToObj(rootClass);
  const backgroundImage = `linear-gradient(to right ${color}, ${color}, ${color}`;

  const styles = {
    border,
    width,
    borderRadius,
    lineHeight,
    ...customStyles,
    backgroundImage: preSetStyle ? backgroundImage : '',
  };

  return (
    <hr
      style={styles}
      className={`${transition && inView ? transitions[transition] : ''}`}
      dataBlokC={dataBlokC}
      dataBlokUid={dataBlokUid}
      inView={inView}
      ref={ref}
      id="hrDivider"
    />
  );
};

export default Divider;

Divider.propTypes = {
  rootClass: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string,
  thickness: PropTypes.string,
  lineStyle: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  preSetStyle: PropTypes.string,
  transition: PropTypes.string,
  dataBlokC: PropTypes.string,
  dataBlokUid: PropTypes.string,
};

Divider.defaultProps = {
  rootClass: [],
  width: '100%',
  dataBlokC: '',
  dataBlokUid: '',
  thickness: '.7px',
  lineStyle: 'solid',
  color: '#000',
  borderRadius: '1px',
  transition: '',
  preSetStyle: '',
  lineHeight: '1.2',
};
