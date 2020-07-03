import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Storyblok from '../../utils/Storyblok';
import { muiStringProp } from '../../utils/customProps';
import BBBSvg from './components/BBBSvg/BBBSvg';
import FacebookSvg from './components/FacebookSvg/FacebookSvg';
import GoogleSvg from './components/GoogleSvg/GoogleSvg';
import LinkedinSvg from './components/LinkedinSvg/LinkedinSvg';
// import styles for icons in styleguide
import '../../styles/styles.scss';

// import icons to use for custom icons passed down to app;
import customIcons from '../../utils/customIcons';

// import { icons } from '../MuiStoryblok/MuiStoryblok';
// const icons = getIcons();
/**
 * MuiIcon is used in storyblok redirect to react routes
 */

export const MuiIcon = ({
  color,
  fontSize,
  iconName,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const customIcon = customIcons.find(icon => icon.iconName === iconName);
  if (customIcon) {
    const Custom = customIcon.Component;
    return (
      <Custom
        className={styles.root}
        color={color}
        fontSize={fontSize}
        {...customIcon.props}
      />
    );
  }

  switch (iconName) {
    case 'facebook':
      return <FacebookSvg color={color} fontSize={fontSize} className={styles.root} />;
    case 'bbb':
      return <BBBSvg color={color} fontSize={fontSize} className={styles.root} />;
    case 'linkedin':
      return <LinkedinSvg color={color} fontSize={fontSize} className={styles.root} />;
    case 'google':
      return <GoogleSvg color={color} fontSize={fontSize} className={styles.root} />;
    default:
      return (
        <Icon
          className={styles.root}
          color={color}
          fontSize={fontSize}
        >
          {iconName}
        </Icon>
      );
  }
};

export default MuiIcon;

MuiIcon.propTypes = {
  /** any icon from https://material.io/resources/icons/?style=baseline */
  iconName: PropTypes.string.isRequired,
  /**
   * mui prop: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color(props, propName, componentName) {
    const validProp = ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: 'default', 'small', 'inherit', 'large'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * */
  fontSize(props, propName, componentName) {
    const validProp = ['default', 'small', 'inherit', 'large'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiIcon.defaultProps = {
  rootClass: [],
  color: 'secondary',
  fontSize: 'default',
};
