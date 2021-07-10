import {useContext} from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useToasts } from 'react-toast-notifications';
import CreateUser from './Form';
import {UsersContext} from '../../context/UsersContext';
import { createUserValidation } from '../../utils/validations';
import { withRouter } from "react-router";
const CreateUserContainer = (props)=>{

    const {actions} = useContext(UsersContext);
    const { addToast } = useToasts();

    const onSubmit = async(values, {setSubmitting})=>{
        try{
            setSubmitting(true);
            const res = await actions.createUser(values);
            addToast(`User was saved successfully`, { appearance: 'success' });
            props.history.push("/")
        }catch(err){
            console.log(err);
            addToast(`Error occurred. Please try again.`, { appearance: 'error' });
        }finally{
            setSubmitting(false);
        }
    }

    const renderForm = ({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        submitForm,
        isSubmitting,
        isValid,
    })=>{
        return (
            <CreateUser
                values={values}
                errors={errors}
                touched={touched}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                submitForm={submitForm}
                isValid={isValid}
                setFieldValue={setFieldValue}
            />
        )
    }


    return (
        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            email: "", 
            descriptiomn: "",
            password: "",
            passwordConfirm: ""
        }}
        validationSchema={createUserValidation}
        onSubmit={onSubmit}
        enableReinitialize={true}>
         {(props)=>renderForm(props)}
        </Formik>
    )
}


export default withRouter(CreateUserContainer);