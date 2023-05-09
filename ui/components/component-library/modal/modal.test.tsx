/* eslint-disable jest/require-top-level-describe */
import { render } from '@testing-library/react';
import React from 'react';

import { Modal } from './modal';

describe('Modal', () => {
  const onClose = jest.fn();

  beforeEach(() => {
    onClose.mockClear();
  });

  it('should render the Modal without crashing', () => {
    const { getByText, getByTestId } = render(
      <Modal onClose={onClose} isOpen data-testid="modal">
        <div>modal dialog</div>
      </Modal>,
    );
    expect(getByText('modal dialog')).toBeDefined();
    expect(getByTestId('modal')).toHaveClass('mm-modal');
  });

  it('should match snapshot', () => {
    const { container } = render(
      <Modal onClose={onClose} isOpen>
        <div>modal dialog</div>
      </Modal>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with and additional className', () => {
    const { getByTestId } = render(
      <Modal
        onClose={onClose}
        isOpen
        className="test-class"
        data-testid="modal"
      >
        <div>modal dialog</div>
      </Modal>,
    );
    expect(getByTestId('modal')).toHaveClass('mm-modal test-class');
  });
});
