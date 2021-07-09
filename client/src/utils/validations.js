import { addMethod, mixed, string, ref, object, number, date, boolean } from 'yup';
export const EMAIL = /^(?=.*[a-z].*@.*[a-z].*\.)(?:[a-z0-9]{1,}[_.\-+]{0,1}){0,}[a-z0-9äöü]{1,}@[a-z0-9äöü-]{2,}(?:\.[a-z]{2,}){1,}$/i;
export const REGEX_NAME = /^[a-z א-ת ,.'-]+$/i;

export const createUserValidation = object().shape({
    firstName: string()
        .min(2, "Enter at least 2 characters")
        .matches(REGEX_NAME, "Not a valid name")
        .required( "First name is mandatory"),
    lastName: string()
        .min(2, "Enter at least 2 characters")
        .matches(REGEX_NAME, "Not a valid name")
        .required( "Last name is mandatory"),
    email: string()
        .min(2, "Not a valid email address")
        .trim()
        .lowercase()
        .email("Not a valid email address")
        .required( "Email is mandatory"),
    description: string()
        .min(2, "Enter at least 2 characters")
        .required( "Description is mandatory"),
    password: string()
        .min(6, "Enter at least 6 characters")
        .required( "Password is mandatory"),
    passwordConfirm: string()
        .min(6, "Enter at least 6 characters")
        .required( "Password is mandatory"),
    
})