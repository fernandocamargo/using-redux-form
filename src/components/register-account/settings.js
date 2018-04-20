import when from 'helpers/validation/when';
import {
  not,
  hasOnlyLetters,
  isEmpty,
  isTruthy,
  isValidEmail,
  isValidIBAN,
} from 'helpers/assertion';

export default () => ({
  fields: [
    {
      type: 'input',
      name: 'first-name',
      label: 'First name',
      validate: [
        when(isEmpty).warn('First name is required'),
        when(not(hasOnlyLetters)).warn(
          'First name should contain only small and capital letters, no numbers, special characters, etc.',
        ),
      ],
    },
    {
      type: 'input',
      name: 'last-name',
      label: 'Last name',
      validate: [
        when(isEmpty).warn('Last name is required'),
        when(not(hasOnlyLetters)).warn(
          'Last name should contain only small and capital letters, no numbers, special characters, etc.',
        ),
      ],
    },
    {
      type: 'input',
      name: 'email',
      label: 'Email',
      settings: {
        type: 'email',
      },
      validate: [
        when(isEmpty).warn('Email is required'),
        when(not(isValidEmail)).warn('Email should be a valid email address'),
      ],
    },
    {
      type: 'input',
      name: 'iban',
      label: 'IBAN',
      validate: [when(isEmpty).warn('IBAN is required')],
      validateOnBlur: true,
      validateAsyncly: isValidIBAN().then(
        when(not(isTruthy)).reject(
          'IBAN should be valid International Bank Account Number',
        ),
      ),
    },
  ],
});
