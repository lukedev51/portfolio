import styled from "styled-components";

export const Download = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  color: #e0e0e0;
  text-decoration: none;
  display: flex;
  align-items: center;
  :hover {
    transform: scale(1.05);
    transition: all .5s ease-in-out;
  }
  svg {
    margin-left: 10px;
  }
`;

export const RelativeWrapper = styled.div`
  padding: 20px 0;
  position: relative;
`;
