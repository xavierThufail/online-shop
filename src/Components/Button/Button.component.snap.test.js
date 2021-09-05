import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { SyncOutlined } from '@ant-design/icons';

import Button from './Button.component';

describe('Button snap test', () => {
  const onClick = jest.fn();

  it('Render Button with title Click Here, should match snapshot', () => {
    const { container } = render(<Button onClick={onClick}>Click Here</Button>);

    expect(container).toMatchSnapshot();
  });

  it('Render Button with title Refresh and icon SyncOutlined, should match snapshot', () => {
    const { container, getByText } = render(
      <Button onClick={onClick}>
        Refresh
        <SyncOutlined />
      </Button>
    );
    
    const btn = getByText('Refresh');

    expect(btn).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it('Render button with custom style, should match snapshot', () => {
    const style = {
      borderRadius: '5px',
      fontSize: '13px'
    };

    const { container, getByText } = render(<Button style={style} onClick={onClick}>Click Here</Button>);

    const btn = getByText('Click Here');

    expect(btn).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
