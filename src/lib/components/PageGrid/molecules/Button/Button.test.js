import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Storyblok from 'lib/utils/Storyblok';
import Button from './Button';

Storyblok.arrayToMuiStyles = jest.fn(() => ({}));

function setup(tooltip = []) {
  const props = {
    tooltip,
    buttonText: 'buttonText',
    onClick: jest.fn(),
  };
  const comp = mount(<Button {...props} />);
  return { comp, props };
}

describe('<Button />', () => {
  it('renders Button', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('tooltip', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });


    it('shows tooltip', () => {
      const tooltip = [{
        title: 'cool',
      }];
      const { props } = setup(tooltip);

      const tip = container.querySelector("[data-testid='tooltip']");

      act(() => {
        ReactDOM.render(<Button {...props} />, container);
      });

      expect(tip).toBeDefined();
    });

    it('hides tooltip', () => {
      const { props } = setup();

      const tip = container.querySelector("[data-testid='tooltip']");

      act(() => {
        ReactDOM.render(<Button {...props} />, container);
      });
      expect(tip).toBe(null);
    });
  });

  describe('click', () => {
    it('onClick to be called', () => {
      const { comp, props } = setup();
      comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
      expect(props.onClick).toBeCalled();
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Button {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
