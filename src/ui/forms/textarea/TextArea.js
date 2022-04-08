import styled from 'styled-components';

 
const TextArea = styled.textarea`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 3px 2px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "18px"};;
    padding: ${props => props.padding || "0.5rem 0.5rem"};
    background-color: ${props => props.bgc || "#8F8389"};
;

    ::placeholder{
        font-size: 18px;
        color: #5F758E;
    }
    :focus{
        background-color: #E6EFE9;
    }
`;

 

export{  TextArea } ;
 
