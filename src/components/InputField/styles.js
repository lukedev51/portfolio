import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  label {
    color: ${props => props.theme.colors.white};
    padding-bottom: 5px;
    span {
      color: #f73378;
      padding-left: 3px;
    }
  }
  input,
  textarea {
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.darkGrey};
    border-radius: 4px;
    outline: none;
  }
  p {
    margin: 5px 0 0;
    color: #f73378;
  }
`;
