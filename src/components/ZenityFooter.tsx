import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(to top, rgb(4, 2, 34) 0%, rgb(25, 8, 48) 100%);
  color: rgb(252, 250, 255);
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(130, 38, 242, 0.1)" stroke-width="2"/></svg>');
    background-size: 300px;
    opacity: 0.1;
    z-index: 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  
  img {
    height: 40px;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 0;
    background: linear-gradient(to right, rgb(130, 38, 242) 0%, rgb(138, 244, 234) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, rgb(130, 38, 242) 0%, rgb(138, 244, 234) 100%);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: rgb(252, 250, 255);
    text-decoration: none;
    font-size: 0.95rem;
    opacity: 0.8;
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      opacity: 1;
      transform: translateX(5px);
      color: rgb(138, 244, 234);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(130, 38, 242, 0.2);
  color: rgb(252, 250, 255);
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: rgb(130, 38, 242);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(130, 38, 242, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ContactText = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0;
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(130, 38, 242, 0.2);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
`;

const BackToTop = styled.button`
  background: rgba(130, 38, 242, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(252, 250, 255);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgb(130, 38, 242);
    transform: translateY(-3px);
  }
`;

interface ZenityFooterProps {
  logoText?: string;
  logoImage?: string;
}

const ZenityFooter: React.FC<ZenityFooterProps> = ({ logoText = "Zenity", logoImage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>
              {logoImage ? (
                <img src={logoImage} alt={logoText} />
              ) : (
                <h2>{logoText}</h2>
              )}
            </FooterLogo>
            <FooterText>
              With over 25 years of experience in cybersecurity, risk management, and compliance, 
              I help organizations build effective security programs that enable business innovation.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://www.linkedin.com/in/vikasbhatiauk" target="_blank" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialLink>
              <SocialLink href="https://x.com/vikasbhatiauk" target="_blank" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="https://github.com/veebeeyoukay" target="_blank" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
              <SocialLink href="mailto:vikasbhatiauk@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="/#executive-summary">Executive Summary</a>
              </FooterLink>
              <FooterLink>
                <a href="/#zenity-history">Zenity History</a>
              </FooterLink>
              <FooterLink>
                <a href="/#business-objectives">Business Objectives</a>
              </FooterLink>
              <FooterLink>
                <a href="/#leadership-objectives">Leadership Objectives</a>
              </FooterLink>
              <FooterLink>
                <a href="/#zenity-ciso">Zenity CISO</a>
              </FooterLink>
              <FooterLink>
                <a href="/#vikas-ciso-plan">Vikas's Zenity CISO Plan</a>
              </FooterLink>
              <FooterLink>
                <a href="/#about-vikas">About Vikas</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Expertise</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="#Cyber Risk Management">Cyber Risk Management</a>
              </FooterLink>
              <FooterLink>
                <a href="#AI Security Governance">AI Security Governance</a>
              </FooterLink>
              <FooterLink>
                <a href="#compliance">Compliance & Risk Management</a>
              </FooterLink>
              <FooterLink>
                <a href="#Sales Acceleration">Sales Acceleration</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Contact</FooterHeading>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>
              <ContactText>vikasbhatiauk@gmail.com</ContactText>
            </ContactItem>
            <FooterText>
              Interested in discussing how I can partner with Zenity leadership to meet business objectives using my cybersecurity, 
              compliance, or AI security governance? <a href="https://app.usemotion.com/meet/vikas-bhatia/JP-meeting" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(138, 244, 234)', textDecoration: 'underline' }}>Feel free to schedule a meeting</a>.
            </FooterText>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} {logoText}. All rights reserved.
          </Copyright>
          <BackToTop onClick={scrollToTop} aria-label="Back to top">
            <FontAwesomeIcon icon={faArrowUp} />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default ZenityFooter; 