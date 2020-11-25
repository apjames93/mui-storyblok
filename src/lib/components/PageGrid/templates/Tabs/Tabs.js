import React, { useState, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types';
import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import {
  validComponents,
  muiStringProp,
  dimensionProp,
} from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';

const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));
const Card = lazy(() => import('lib/components/PageGrid/organisms/Card/Card'));
const HeroHeader = lazy(() => import('lib/components/PageGrid/templates/HeroHeader/HeroHeader'));

const components = {
  Typography,
  List,
  Card,
  HeroHeader,
  TabGridItem: GridItem,
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Tabs = ({
  rootClass,
  indicatorColor,
  orientation,
  scrollButtons,
  textColor,
  variant,
  tabs,
  autoplay,
  interval,
  height,
  justifyContent,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  tabIndex,
}) => {
  const [state, setState] = useState({ autoplay, tabsLength: tabs.length });
  const [tabValue, setTabValue] = useState(tabIndex);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const flexStyle = makeStyles(() => ({
    flexContainer: { justifyContent },
  }));

  const handleChangeIndex = () => {
    const tabsLength = tabs.length - 1;
    if (tabValue >= tabsLength) {
      return handleChange({}, 0);
    }
    return handleChange({}, tabValue);
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { flexContainer: { justifyContent: 'space-around' } });
  const flexClass = flexStyle();


  const onMouseEnter = () => {
    if (autoplay) {
      setState({ ...state, autoplay: false });
    }
  };

  const onMouseLeave = () => {
    if (autoplay) {
      setState({ ...state, autoplay: true });
    }
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
      style={{
        flexGrow: 1,
        display: orientation === 'vertical' ? 'flex' : 'block',
      }}
    >
      <MuiTabs
        value={tabValue}
        className={styles.root}
        classes={flexClass}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        orientation={orientation}
        scrollButtons={scrollButtons}
        textColor={textColor}
        variant={variant}
      >
        {tabs.map((item, index) => (
          <MuiTab
            key={index}
            id={index}
            onClick={e => handleChange(e, index)}
            className={styles.root}
            label={item.label}
            disableFocusRipple={item.disableFocusRipple === 'true'}
            disableRipple={item.disableRipple}
            wrapped={item.wrapped}
            icon={(item.icon && item.icon[0] && <Icon {...item.icon[0]} />)}
          />
        ))}
      </MuiTabs>
      <div style={{ height }}>
        {tabs.map((tab, index) => (
          <AutoPlaySwipeableViews
            key={index}
            index={tabValue.toString()} // throws warrning for invalid prop in AutoPlay expected number but view will now display when value is 0
            onChangeIndex={handleChangeIndex}
            autoplay={autoplay}
            interval={typeof interval === 'string' ? Number(interval) : interval}
            enableMouseEvents
            id="swipeableViews-test"
          >
            <div
              role="tabpanel"
              hidden={tabValue !== index}
              style={{ overflow: 'hidden' }}
            >
              {tab.content.map((component, key) => (
                <Suspense fallback={<></>}>
                  {renderComponentsWithBridge({ TabGrid: Grid, ...components }, {
                    ...component,
                    components,
                    key,
                  }, key)}
                </Suspense>
              ))}
            </div>
          </AutoPlaySwipeableViews>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop : 'secondary', 'primary'
   * Determines the color of the indicator.
   */
  indicatorColor(props, propName, componentName) {
    const validProps = ['secondary', 'primary'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'horizontal', 'vertical'
   * The tabs orientation (layout flow direction).
   */
  orientation(props, propName, componentName) {
    const validProps = ['horizontal', 'vertical'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * Height of the tabs container.
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * mui prop: 'auto', 'desktop', 'on', 'off'
   * Determine behavior of scroll buttons when tabs are set to scroll:
   * - auto will only present them when not all the items are visible.
   * - desktop will only present them on medium and larger viewports.
   * - on will always present them.
   * - off will never present them.
   */
  scrollButtons(props, propName, componentName) {
    const validProps = ['auto', 'desktop', 'on', 'off'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'secondary', 'primary', 'inherit'
   * Determines the color of the Tab.
   */
  textColor(props, propName, componentName) {
    const validProps = ['secondary', 'primary', 'inherit'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop:  'standard', 'scrollable', 'fullWidth'
   * Determines additional display behavior of the tabs:
   * - scrollable will invoke scrolling properties and allow for
    horizontally scrolling (or swiping) of the tab bar.
   * -fullWidth will make the tabs grow to use all the available space,
    which should be used for small views, like on mobile.
    - standard will render the default state.
   */
  variant(props, propName, componentName) {
    const validProps = ['standard', 'scrollable', 'fullWidth'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * Justify content flex styling for Tabs.
   * justifyContent: 'space-between', 'center', 'space-evenly', 'space-around'
   */
  justifyContent(props, propName, componentName) {
    const validProps = ['space-between', 'center', 'space-evenly', 'space-around'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to increment tabs: time in milliseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** MuiTab */
  tabs(props, propName, componentName) {
    const comps = ['Tab'];
    return validComponents(props, propName, componentName, comps);
  },
  /** pass down and will set the current tab */
  tabIndex: PropTypes.number,
};

Tabs.defaultProps = {
  rootClass: [],
  tabs: [],
  indicatorColor: 'secondary',
  orientation: 'vertical',
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard',
  autoplay: false,
  interval: 3000,
  height: '300px',
  justifyContent: 'center',
  tabIndex: 0,
};
