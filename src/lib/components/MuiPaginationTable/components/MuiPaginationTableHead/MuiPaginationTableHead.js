import React from 'react';
import PropTypes from 'prop-types';
import { TableHead } from '@material-ui/core';
import MuiPaginationTableRow from '../MuiPaginationTableRow/MuiPaginationTableRow';
import { validComponents } from '../../../../utils/customProps';
import { renderComponents } from '../../../../utils/customComponents';
import StoryBlok from '../../../../utils/Storyblok';

const MuiPaginationTableHead = ({
  rootClass,
  content,
}) => {
  const components = {
    MuiPaginationTableRow,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  return (
    <TableHead className={styles.root}>
      {content.map((component, key) => renderComponents(components, component, key))}
    </TableHead>
  );
};

export default MuiPaginationTableHead;

MuiPaginationTableHead.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * Content passed to render
   * components:
    MuiPaginationTableRow,
   */
  content(props, propName, componentName) {
    const components = ['MuiPaginationTableRow'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiPaginationTableHead.defaultProps = {
  rootClass: [],
  content: [],
};
