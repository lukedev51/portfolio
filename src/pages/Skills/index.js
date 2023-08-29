import React from "react";
import { Container, Wrapper } from "../../lib/container";
import { Card, CardWrapper } from "./styles";
import { skills } from "../../constants";
import CircleChart from "../../components/CircleChart";
import { Typography } from "../../lib/typography";

const Skills = () => {
  return (
    <Container>
      <Wrapper>
        <Typography variant="h2" align="center" color="white">
          Skills
        </Typography>
        <CardWrapper>
          {skills.map((skill, idx) => {
            return (
              <Card key={idx}>
                <p>{skill.type}</p>
                <CircleChart percent={skill.level} />
              </Card>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Skills;
