import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { styled } from "styled-components";
import Typewriter from "typewriter-effect";

import "./App.css";
import { options } from "./particles";
import profileImg from "./assets/images/luke.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 130px);
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  img {
    width: 200px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.white};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.white};
    margin: 0.5rem 0;
  }
  .Typewriter {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={options} init={particlesInit} />
      <Wrapper>
        <img src={profileImg} alt="profile-img" />
        <h2>Luke Jeffers</h2>
        <Typewriter
          options={{
            strings: [
              "Senior Frontend Developer",
              "Senior Software Engineer",
              "Full-Stack JavaScript Engineer",
              "Webflow Expert",
              "Game Design & Development",
            ],
            loop: true,
            autoStart: true,
            pauseFor: 1500,
            delay: 40,
            cursor: "",
          }}
        />
      </Wrapper>
    </div>
  );
}

export default App;
