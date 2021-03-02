import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act, fireEvent } from '@testing-library/react';
import { Formik } from 'formik';

import TextField from './TextField.component';
import '../../matchMedia.mock';

describe('TextField component snap test', () => {

  beforeEach(jest.clearAllMocks);

  it('Render TextField, when change value should match input', () => {
    const mockedProps = {
      name: 'test',
      placeholder: 'masukan nomor',
      errorMessage: 'required'
    };
    
    const { container, getByPlaceholderText, getByText } = render(
      <Formik
        initialValues={{ test: '' }}
        initialErrors={{ test: mockedProps.errorMessage }}
      >
        {formikProps => <TextField {...formikProps} {...mockedProps} />}
      </Formik>
    );

    const input = getByPlaceholderText(mockedProps.placeholder);

    act(() => {
      fireEvent.change(input, { target: { value: '12345' } });
      fireEvent.blur(input);
    });

    const inlineError = getByText(mockedProps.errorMessage);

    expect(inlineError).toBeInTheDocument();
    expect(input.value).toBe('12345');
  });
});
