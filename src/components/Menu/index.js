import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NEG_NUM_1, NUM_0 } from "../../constants";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkGrey};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: calc(100vh - 90px);
  width: 80%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  bottom: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const links = [
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Menu = ({ open, setOpen, id }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? NUM_0 : NEG_NUM_1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} id={id}>
      {links.map((link, idx) => {
        return (
          <Link
            to={link.path}
            tabIndex={tabIndex}
            key={idx}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        );
      })}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  id: PropTypes.string,
};

export default Menu;
