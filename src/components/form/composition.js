import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form';

import props from './props';

export default compose(withProps(props), reduxForm());
