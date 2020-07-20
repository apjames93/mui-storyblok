import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../../../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from '../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from '../../../MuiButtonDialog/MuiButtonDialog';
import MuiExpansionPanel from '../../../MuiExpansionPanel/MuiExpansionPanel';
import MuiAudioPlayer from '../../../MuiAudioPlayer/MuiAudioPlayer';
import GoogleConversions from '../../../GoogleConversions/GoogleConversions';
import Storyblok from '../../../../utils/Storyblok';

const MuiCardActions = ({
  content,
  rootClass,
  disableSpacing,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
    MuiExpansionPanel,
    MuiAudioPlayer,
    GoogleConversions,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardActions
      className={styles.root}
      disableSpacing={disableSpacing}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </CardActions>
  );
};

export default MuiCardActions;

MuiCardActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
  /**
   * Content passed to render
   * components:
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
   */
  content(props, propName, componentName) {
    const validComponents = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'MuiButtonDialog',
      'GoogleConversions',
    ];
    return validComponents(props, propName, componentName, validComponents);
  },
};

MuiCardActions.defaultProps = {
  rootClass: [],
  disableSpacing: false,
  content: [],
};
