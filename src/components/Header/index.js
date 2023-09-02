import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FocusLock from "react-focus-lock";
import { useLocation } from "react-router-dom";

import logo from "../../assets/images/luke.png";
import { Container, StyledLink, Wrapper } from "./styles";
import Burger from "../Burger";
import Menu from "../Menu";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

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

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const location = useLocation();

  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container>
      <Wrapper ref={node}>
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          {links.map((link, idx) => {
            return (
              <li key={idx}>
                <StyledLink
                  to={link.path}
                  selected={location.pathname === link.path}
                >
                  {link.name}
                </StyledLink>
              </li>
            );
          })}
        </ul>
        <FocusLock disabled={!open} className="focus-lock">
          <Burger open={open} setOpen={setOpen} ariaControls={menuId} />
          <Menu open={open} id={menuId} setOpen={setOpen} />
        </FocusLock>
      </Wrapper>
    </Container>
  );
};

export default Header;
