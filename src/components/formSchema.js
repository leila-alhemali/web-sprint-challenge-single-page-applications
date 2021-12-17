import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Enter name for your order.')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .trim()
    .required('Select a size.'),
    topping1: yup.boolean,
    topping2: yup.boolean,
    topping3: yup.boolean,
    topping4: yup.boolean,
    special: yup
    .string()
    .trim()
})


export default formSchema;