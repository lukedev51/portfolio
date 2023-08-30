import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.darkGrey};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  &:disabled {
    background-color: rgba(239, 239, 239, 0.3);
    cursor: not-allowed;
  }
  svg {
    margin: 0 10px;
  }
  margin-top: 30px;
`;

const Button = ({
  startIcon,
  endIcon,
  type,
  disabled,
  children,
}) => {
  return (
    <Wrapper type={type} disabled={disabled}>
      {startIcon}
      {children}
      {endIcon}
    </Wrapper>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
