import styled from "styled-components";

export const Typography = styled.p`
  margin: 0;
  font-size: ${(props) =>
    props.variant === "h1"
      ? "2.5rem"
      : props.variant === "h2"
      ? "2rem"
      : props.variant === "h3"
      ? "1.8rem"
      : props.variant === "h4"
      ? "1.5rem"
      : props.variant === "h5"
      ? "1.2rem"
      : "1rem"};
  font-weight: ${props => props.variant === "body" ? 400 : 600};
  text-align: ${(props) => props.align || "left"};
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.white};
  padding: ${props => ["h1", "h2", "h3"].includes(props.variant) ? "1rem 0" : "0.5rem 0"};
`;
