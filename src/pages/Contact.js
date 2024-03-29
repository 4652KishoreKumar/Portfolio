import React from "react";
import styled from "styled-components";
import {
  currentLocation,
  locationMapIcon,
  mailAddress,
  mailIcon,
} from "../Constants";
import { Container } from "../GlobalStyles";

const StyledContact = styled.section`
  background-color: #fff;
  padding: 11rem 0;
  @media only screen and (max-width: 731px) {
    padding: 8rem 0;
  }
`;

const ContactTitle = styled.div`
  & p {
    color: #387ADF;
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  & h3 {
    color: #2d2e32;
    font-size: 2.5rem;
  }
`;

const ContactLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  margin-top: 6rem;
  @media only screen and (max-width: 731px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 4rem;
  }
`;

const ContactLinkBox = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5rem;

  & span {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #147efb;
    display: flex;
    height: 5rem;
    justify-content: center;
    width: 5rem;
  }
  @media only screen and (max-width: 731px) {
    flex-direction: column;
  }
`;

const ContactLinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h3 {
    color: #2d2e32;
    font-size: 1.7rem;
  }

  & a {
    color:#387ADF;
    cursor: pointer;
    font-size: 1.7rem;
    text-decoration: none;
  }
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 731px) {
    align-items: center;
    text-align: center;
  }
`;
export default function Contact() {
  return (
    <StyledContact id="contact">
      <Container>
        <ContactContent>
          <ContactTitle>
            <p>CONTACT</p>
            <h3>Don't be shy! Hit me up!👇</h3>
          </ContactTitle>
          <ContactLink>
            <ContactLinkBox>
              <span>{locationMapIcon}</span>
              <ContactLinkInfo>
                <h3>Location</h3>
                <a href={currentLocation}>Chennai, India</a>
              </ContactLinkInfo>
            </ContactLinkBox>

            <ContactLinkBox>
              <span>{mailIcon}</span>
              <ContactLinkInfo>
                <h3>Mail</h3>
                <a
                  href={
                    "mailto:" +
                    mailAddress
                  }
                >
                  {" "}
                  {mailAddress}
                </a>
              </ContactLinkInfo>
            </ContactLinkBox>
          </ContactLink>
        </ContactContent>
      </Container>
    </StyledContact>
  );
}
