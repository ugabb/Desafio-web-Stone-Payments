import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const ApiInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
  color: #45505e;
  margin-bottom: .5rem;
`;

const Divider = styled.div`
  border-right: 2px solid #45505e;
`;

export { Nav, ApiInfo,Divider };
