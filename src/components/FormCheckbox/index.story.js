import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FormCheckbox from './index';

storiesOf('FormCheckbox', module)
  .add('Normal', withInfo()(() => (
    <FormCheckbox
      label="Label"
      meta={{
        error: null,
        touched: false,
      }}
    />
  )))
  .add('With error', withInfo()(() => (
    <FormCheckbox
      label="Label"
      meta={{
        error: 'Field error',
        touched: true,
      }}
    />
  )));
