import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: 18px;
    color: #383961;
`;
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 2px;
    box-shadow: 0 0 4px 2px #000;
    font-size:18px;
    padding: 0.5rem 0.5rem;

    ::placeholder{
        font-size: 18px;
        color: #383961;
    }
    :focus{
        background-color:  #DBDFAC;
    }
`;


export{Input, Label} ;