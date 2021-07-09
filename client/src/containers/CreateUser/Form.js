import * as styled from './styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateUserForm = (props)=>{
    
    const passwordMatch = props.values.password === props.values.passwordConfirm;
    const passwordMatchErr = passwordMatch? '': "Passwords confirmation does not match the entered password";
  
    return (
        <styled.FormContainer>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <styled.Label>First Name</styled.Label>
            <styled.Control value={props.values.firstName}  isInvalid={!!props.errors.firstName} type="text" name="firstName" onChange={props.handleChange} placeholder="Enter First Name" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.firstName}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <styled.Label>Last Name</styled.Label>
            <styled.Control value={props.values.lastName} isInvalid={!!props.errors.lastName} type="text" name="lastName" onChange={props.handleChange} placeholder="Enter Last Name" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.lastName}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <styled.Label>Email address</styled.Label>
            <styled.Control value={props.values.email} type="email" isInvalid={!!props.errors.email} onChange={props.handleChange} name="email" placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.email}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <styled.Label>Description</styled.Label>
            <styled.Control value={props.values.description}  isInvalid={!!props.errors.description} type="text" name="description" onChange={props.handleChange} placeholder="Enter Description" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.firstName}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <styled.Label>Password</styled.Label>
            <styled.Control value={props.values.password} type="password" isInvalid={!!props.errors.password} onChange={props.handleChange}  name="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.password}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <styled.Label>Password Confirmation</styled.Label> 
            <styled.Control value={props.values.passwordConfirm} name="passwordConfirm" isInvalid={!!props.errors.passwordConfirm || !passwordMatch} onChange={props.handleChange} type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
                  {props.errors.passwordConfirm || passwordMatchErr}
            </Form.Control.Feedback>
        </Form.Group>
        <styled.ButtonContainer>
            <Button onClick={props.submitForm} size="lg" block disabled={!props.isValid} variant="primary" type="button">
                Submit
            </Button>
        </styled.ButtonContainer>

        </Form>
        </styled.FormContainer>
    )
}

export default CreateUserForm;