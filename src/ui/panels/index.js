import styled from "styled-components";

const Panel = styled.section`
  min-height: calc(100vh - (3rem + 64px));
  box-shadow: 0 0 4px 0 #E5D4CE;
  background-color: #Eff6EE;
  border-radius: 3px;
  flex: 1;
  margin: 1.5rem;
  
`;
const PanelHeader = styled.header`
 
`;

const PanelTitle = styled.h1`
  
    background-color: #F8F7FF;
    padding: 1rem;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-weight:bold;
    color:#171D1C;    
 
`;

const PanelBody = styled.div`
  margin: ${props => props.margin || "6rem"};
`;


export { Panel, PanelHeader, PanelBody, PanelTitle };
