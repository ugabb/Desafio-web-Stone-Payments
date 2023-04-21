import styled from "styled-components";

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: #45505e;
  margin: 0 1.5rem;
`;

const ButtonVoltar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  gap: 1rem;
  border: 1px solid #d7e0eb;
  border-radius: 8px;
  padding: 10px 12px;
  color: #2e3742;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 7px 0px #D7E0EB;
`;

const Value = styled.h1`
  color: #00ab63;
  font-size: 64px;
  
`;

const h3 = styled.h3`
    
`

export { ResultContainer, ButtonVoltar,Value };
