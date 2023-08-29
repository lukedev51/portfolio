import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2rem 0;
  min-height: calc(100vh - 90px);
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;
