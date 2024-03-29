/* eslint-disable jest/require-top-level-describe */
import React from 'react';
import 'jest-canvas-mock';
import { renderWithProvider } from '../../../../test/jest';
import configureStore from '../../../store/store';
import mockState from '../../../../test/data/mock-state.json';
import { AccountPicker } from '.';

const DEFAULT_PROPS = {
  name: 'Account 1',
  address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
  onClick: () => undefined,
};

const render = (props = {}, state = {}) => {
  const store = configureStore({
    metamask: {
      ...mockState.metamask,
      provider: {
        chainId: '0x99',
      },
      ...state,
    },
  });
  return renderWithProvider(
    <AccountPicker {...DEFAULT_PROPS} {...props} />,
    store,
  );
};

describe('AccountPicker', () => {
  it('renders properly', () => {
    const { container } = render({}, { useBlockie: true });
    expect(container).toMatchSnapshot();
  });

  it('displays a blockie per the setting', () => {
    const { container } = render({}, { useBlockie: true });
    expect(container.querySelector('canvas')).toBeDefined();
    expect(container.querySelector('img')).toBeDefined();
  });

  it('displays a jazzicon per the setting', () => {
    const { container } = render({}, { useBlockie: false });
    expect(container.querySelector('svg')).toBeDefined();
  });
});
