import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act, fireEvent } from '@testing-library/react';
import { Formik } from 'formik';

import TextField from './TextField.component';
import '../../matchMedia.mock';

describe('TextField component snap test', () => {

  beforeEach(jest.clearAllMocks);

  it('Render TextField, should matching snapshot', () => {
    const mockedProps = {
      name: 'test'
    };
    
    const { container } = render(
      <Formik>
        {formikProps => <TextField {...formikProps} {...mockedProps} />}
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });

  it('Render TextField with label, should matching snapshot', () => {
    const mockedProps = {
      label: 'Username',
      name: 'username',
      placeholder: 'username'
    };

    const { container, getByText, getByPlaceholderText } = render(
      <Formik>
        {formikProps => <TextField {...formikProps} {...mockedProps} />}
      </Formik>  
    );
    const label = getByText(mockedProps.label);
    const input = getByPlaceholderText(mockedProps.placeholder);

    act(() => {
      fireEvent.blur(input);
    });

    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
