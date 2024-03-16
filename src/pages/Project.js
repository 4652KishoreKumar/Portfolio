import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";
import {
  Project1Demo,
  githubIcon,
  githubURL,
  linkedInIcon,
  linkedInURL,
} from "../Constants";
import HotelHavenLogo from "../assets/Hotelhaven_Logo.png";
import HotelHavenPreview from "../assets/Wild-Oasis-Dark.png";
import PizzaPlanetPreview from "../assets/Pizza-Planet-preview.png";
const StyledProject = styled.section`
  background-color: #f9f9f9;
  padding: 15rem 0;

  & h2 {
    color: #2d2e32;
    font-size: 2.6rem;
    text-align: center;
  }
  & #projectPage {
    color: #387adf;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1043px) {
      text-align: center;
  }
  }
  & #prjDesc {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 4rem;
    @media only screen and (max-width: 1043px) {
      text-align: center;
  }
  }
`;
const ProjectContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  font-size: medium;
  justify-content: space-around;
  /* font-family: "Roboto Mono", monospace; */
  margin-bottom: 8rem;
  column-gap: 2rem;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  &:nth-child(even) {
    flex-direction: row;
  }
  &:last-child() {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1043px) {
    row-gap: 1.5rem;
  }
`;
const ProjectDetails = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  row-gap: 2rem;
  & p {
    width: 36rem;
    font-family: Mulish, sans-serif;
    text-align: center;
    color: #767676;
    font-weight: 700;
    line-height: 2.33rem;
  }
`;

const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & img {
    border-radius: 2rem;
  }
  & h1 {
    color: #387adf; //#147efb;#1b90f7;
  }
`;
const ProjectTechStack = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.3rem;
`;
const ProjectLinks = styled.div`
  display: flex;
  gap: 5rem;
`;
const ProjectCode = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const ProjectPreview = styled.div`
  width: 50%;
  min-width: 48rem;
  height: 29rem;
  & img {
    border-radius: 2rem;
    height: 100%;
    width: 100%;
    box-shadow: rgba(56, 122, 223, 0.4) -5px 5px,
      rgba(56, 122, 223, 0.3) -10px 10px, rgba(56, 122, 223, 0.2) -15px 15px,
      rgba(56, 122, 223, 0.1) -20px 20px, rgba(56, 122, 223, 0.05) -25px 25px;
  }
  @media only screen and (max-width: 1043px) {
    min-width: 42rem;
  }
`;

export default function Project() {
  return (
    <StyledProject id="projects">
      <Container>
        <h1 id="projectPage"> PORTFOLIO</h1>
        <p id="prjDesc">Each project is a unique piece of development</p>
        <ProjectContainer>
          <ProjectDetails>
            <ProjectName>
              <h1>HOTEL HEAVEN 🏩</h1>
              {/* <img src={HotelHavenLogo} alt="HotelHavenLogo.img" width="40" /> */}
            </ProjectName>
            <p>
              Hotel Heaven is an Hotel Management App streamlines Hotel staff duties, ensuring quick
              guest check-ins, cabin oversight, and booking management. It
              offers user-friendly interfaces for updating information and
              handling reservations efficiently.
            </p>
            <ProjectTechStack>
              <h1>React</h1>
              <h1>StyledComponents</h1>
            </ProjectTechStack>
            <ProjectLinks>
              <ProjectCode>
                <h1>Code</h1>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href={githubURL}
                >
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    class="octicon octicon-mark-github v-align-middle color-fg-default"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                </a>
              </ProjectCode>
              <ProjectCode>
                <h1>Live Demo</h1>
                <a
                  className="linkIcon"
                  aria-label="LiveDemo"
                  rel="noreferrer"
                  target="_blank"
                  href={Project1Demo}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 128 128"
                  >
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
                  </svg>
                </a>
              </ProjectCode>
            </ProjectLinks>
          </ProjectDetails>
          <ProjectPreview>
            <img
              src={HotelHavenPreview}
              alt="HotelHavenPreview.img"
              width="350"
            />
          </ProjectPreview>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectDetails>
            <ProjectName>
              <h1>PIZZA PLANET 🍕</h1>
            </ProjectName>
            <p>
              Pizza Planet is an Streamlined pizza ordering platform with user
              registration, geolocation, menu browsing, cart management, and
              order tracking features. Seamlessly designed for convenience and efficiency.
            </p>
            <ProjectTechStack>
              <h1>React</h1>
              <h1>Tailwind</h1>
            </ProjectTechStack>
            <ProjectLinks>
              <ProjectCode>
                <h1>Code</h1>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href={githubURL}
                >
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    class="octicon octicon-mark-github v-align-middle color-fg-default"
                  >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                  </svg>
                </a>
              </ProjectCode>
              <ProjectCode>
                <h1>Live Demo</h1>
                <a
                  className="linkIcon"
                  aria-label="LiveDemo"
                  rel="noreferrer"
                  target="_blank"
                  href={Project1Demo}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 128 128"
                  >
                    <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
                  </svg>
                </a>
              </ProjectCode>
            </ProjectLinks>
          </ProjectDetails>
          <ProjectPreview>
            <img
              src={PizzaPlanetPreview}
              alt="PizzaPlanetPreview.img"
              width="350"
            />
          </ProjectPreview>
        </ProjectContainer>
      </Container>
    </StyledProject>
  );
}
