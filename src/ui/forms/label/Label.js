
import styled from 'styled-components';


const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-size: ${props => props.fs || '18px'};;
    color: ${props => props.color || "#8F8389" };
    padding: ${props => props.padding || '0'};;
    margin: ${props => props.margin || '0'};;
`;
export{ Label} ;
