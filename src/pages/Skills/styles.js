import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 15px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const Card = styled.div`
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  p {
    font-weight: 600;
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1rem;
  }
`;
