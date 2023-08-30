import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 640px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  text-align: center;
  form {
    margin-top: 30px;
  }
  input[type="submit"] {
    padding: 10px;
    width: 100%;
    border-radius: 4px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
    outline: none;
    border: none;
    margin-top: 30px;
    color: ${(props) => props.theme.colors.darkGrey};
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  @media (max-width: 640px) {
    padding: 0;
  }
`;