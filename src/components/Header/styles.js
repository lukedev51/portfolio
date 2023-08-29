import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 80px;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      padding: 0 15px;
      a {
        font-size: ${(props) => props.theme.fontSizes.medium};
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        display: inline-block;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: ${(props) => props.theme.colors.white};
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .focus-lock {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
