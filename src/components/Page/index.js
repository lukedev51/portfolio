import React from "react";
import PropTypes from "prop-types";
import { Container, Wrapper } from "../../lib/container";
import { Typography } from "../../lib/typography";

const Page = ({ title, children }) => {
  return (
    <Container>
      <Wrapper>
        <Typography variant="h2" align="center" color="white">
          {title}
        </Typography>
        {children}
      </Wrapper>
    </Container>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Page;
