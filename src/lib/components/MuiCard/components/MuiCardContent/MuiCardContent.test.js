import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCardContent from './MuiCardContent';

function setup() {
  const props = {
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }, {
      component: 'MuiAccordion',
      accordionSummary: [{
        component: 'MuiAccordionSummary',
        content: [{
          component: 'MuiIcon',
          iconName: 'android',
        }],
        expandIcon: [{
          component: 'MuiIcon',
          iconName: 'android',
        }],
      }],
      accordionDetails: [{
        component: 'MuiAccordionDetails',
        content: [{
          component: 'MuiAccordionTypography',
          content: [{
            component: 'MuiText',
            text: 'text',
          }],
        }],
      }],
    }],
  };
  const comp = shallow(<MuiCardContent {...props} />);
  return { comp, props };
}

describe('<MuiCardContent />', () => {
  it('renders MuiCardContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCardContent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
