import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #2E3742;
`;

const Input = styled.input`
    border: 1px solid #D7E0EB;
    border-radius: 4px;
    padding: 1rem;
    margin-top: .5rem;
    box-shadow: 0px 7px 0px #D7E0EB;
`

export { FormContainer, InputField, Input };
