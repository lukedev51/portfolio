import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 15px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    transition: all .3s ease-in-out;
  }
  .card-media {
    height: 180px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
  }
  .card-body {
    padding: 10px;
    .d-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        margin: 0.5rem;
        display: inline-block;
      }
    }
    .description {
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
      padding: 0;
      white-space: pre-line;
    }
  }
`;

export const ModalWrapper = styled.div`
  img {
    width: 100%;
  }
  p {
    white-space: pre-line;
  }
`;
