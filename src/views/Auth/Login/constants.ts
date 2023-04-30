import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
     email: Yup.string()
          .email('Email es inválido')
          .required('Email es requerido'),

     password: Yup.string()
          .min(1, 'Too Short!')
          .max(30, 'Too Long!')
          .required('Contraseña es requerida'),
});

export const initialValues = {
     email: '',
     password: '',
};
