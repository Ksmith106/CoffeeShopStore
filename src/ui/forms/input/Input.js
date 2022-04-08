import styled from 'styled-components';

 
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 4px 2px rgba(0,0,0,0.19);
    font-size: ${props => props.fs || "1.125rem"};;
    padding: ${props => props.padding || "0.35rem 0.5rem"};
    background-color: ${props => props.bgc || "#CACFD6"};;
    ;

    ::placeholder{
        font-size: 18px;
        color: #2D3319;
    }
    :focus{
        background-color: #FAFFFD;
    }
`;

 

export{  Input } ;
 
