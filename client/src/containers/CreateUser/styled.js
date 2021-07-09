import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import _Button from 'react-bootstrap/Button';

export const FormContainer = styled.div`
    width:50%;
    border: 1px solid #99ccff;
    margin: 30px auto;
    padding: 30px;
`;

export const Label = styled(Form.Label)`
    font-size: 2rem;
    margin-top: 10px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
export const Control = styled(Form.Control)`
    font-size: 1.5rem;
`;

export const Submit = styled.a`
    width: 200px;
    height: 40px;
    display:flex;
    justify-content: center;
    align-items:center;
    text-align: center;
    font-size: 2rem;
    background-color: green;
    border-radius: 5px;
`;