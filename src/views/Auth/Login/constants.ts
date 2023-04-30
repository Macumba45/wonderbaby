import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     email: Yup.string()
          .email('Email is invalid')
          .required('Email es requerido'),

     password: Yup.string()
          .min(4, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Password es requerido'),
});

export const initialValues = {
     email: '',
     password: '',
};
