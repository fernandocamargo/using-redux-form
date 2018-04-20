import retry from 'helpers/request/retry';

export const isValidIBAN = iban =>
  window
    .fetch('/', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ iban }),
    })
    .then(retry(isValidIBAN).with(iban));
