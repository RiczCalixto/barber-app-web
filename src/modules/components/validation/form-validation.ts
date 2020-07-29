import * as Yup from 'yup';
import { SignUpData, SignInData } from '../../../model/forms.model';
import { Strings } from './validation.strings';

const {
  requiredEmail,
  requiredName,
  requiredPassword,
  validEmail,
  validPassword,
} = Strings.Form.Error;

export const signUpFormValidation = async (data: SignUpData) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(requiredName),
    email: Yup.string().required(requiredEmail).email(validEmail),
    password: Yup.string().min(6, validPassword),
  });
  await schema.validate(data, { abortEarly: false });
};

export const signInFormValidation = async (data: SignInData) => {
  const schema = Yup.object().shape({
    email: Yup.string().required(requiredEmail).email(validEmail),
    password: Yup.string().required(requiredPassword),
  });

  await schema.validate(data, { abortEarly: false });
};

interface Errors {
  [key: string]: string;
}

export const getValidationErrors = (errors: Yup.ValidationError): Errors => {
  const validationErrors: Errors = {};
  errors.inner.map(error => (validationErrors[error.path] = error.message));

  return validationErrors;
};
