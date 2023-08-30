import React, { useCallback, useState } from "react";
import { FaLink } from "react-icons/fa";
import { Typography } from "../../lib/typography";
import { Card, ModalWrapper, PortfolioWrapper } from "./styles";
import { NEG_NUM_1, projects } from "../../constants";
import Modal from "../../components/Modal";
import useModal from "../../Hooks/useModal";
import Page from "../../components/Page";

const Portfolio = () => {
  const { isShowing, toggle } = useModal();
  const [activeId, setActiveId] = useState(NEG_NUM_1);

  const handleOpenModal = useCallback((i) => {
    setActiveId(i);
    toggle();
  }, []);

  return (
    <Page title="Portfolio">
      <PortfolioWrapper>
        {projects.map((project, i) => {
          return (
            <Card onClick={() => handleOpenModal(i)} key={i}>
              <img src={project.image} alt={project.name} className="card-media"/>
              <div className="card-body">
                <div className="d-flex">
                  <Typography variant="h5" color="darkGrey">{project.name}</Typography>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaLink />
                  </a>
                </div>
                <Typography variant="body" color="lightGrey" className="description">
                  {project.description}
                </Typography>
              </div>
            </Card>
          );
        })}
      </PortfolioWrapper>
      {activeId !== NEG_NUM_1 && <Modal
        isShowing={isShowing}
        hide={toggle}
        title={projects[activeId].name}
      >
        <ModalWrapper>
          <img src={projects[activeId].image} alt={projects[activeId].name} />
          <Typography variant="body" color="lightGrey">
            {projects[activeId].description}
          </Typography>
        </ModalWrapper>
      </Modal>}
    </Page>
  );
};

export default Portfolio;
