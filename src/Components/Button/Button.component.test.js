import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, act } from '@testing-library/react';

import Button from './Button.component';

describe('Button tests', () => {
  const onClick = jest.fn();

  afterEach(jest.clearAllMocks);

  it('Render Button, should called onClick function when button is clicked', () => {
    const { getByText } = render(
      <Button
        onClick={onClick}
        disabled={false}
      >Test</Button>
    );

    const button = getByText('Test');

    act(() => {
      fireEvent.click(button);
    });

    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledTimes(1);
  });

  it('Render Button with disabled props, button should not be click and onClick should not be called', () => {
    const { getByText } = render(
      <Button
        onClick={onClick}
        disabled={true}
      >Test</Button>
    );

    const button = getByText('Test');

    act(() => {
      fireEvent.click(button);
    });

    expect(onClick).not.toBeCalled();
  });
});
