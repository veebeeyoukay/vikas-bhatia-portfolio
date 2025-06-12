import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// Styled Components
const PageBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #18122B 0%, #090823 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(to bottom, rgb(25, 8, 48) 0%, rgb(4, 2, 34) 100%);
  padding: 3rem 0;
  scroll-margin-top: 100px;
  
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

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  color: rgb(252, 250, 255);
`;

const Highlight = styled.span`
  background: linear-gradient(to right, rgb(130, 38, 242) 0%, rgb(138, 244, 234) 50%, rgb(130, 38, 242) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;

const ProfileCard = styled.div`
  background: rgba(25, 8, 48, 0.7);
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(130, 38, 242, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(130, 38, 242, 0.3);
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgb(130, 38, 242);
`;

const ProfileTitle = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: rgb(252, 250, 255);
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.8;
    color: rgb(252, 250, 255);
  }
`;

const ProfileBio = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgb(252, 250, 255);
`;

const ResumeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(138, 244, 234);
  font-size: 1.1rem;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  &:hover {
    color: rgb(130, 38, 242);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(130, 38, 242);
  color: rgb(252, 250, 255);
  text-decoration: none;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    background: rgb(138, 244, 234);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  background: transparent;
  border: none;
  color: ${props => props.active ? 'rgb(138, 244, 234)' : 'rgb(252, 250, 255)'};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '80%' : '0'};
    height: 3px;
    background: linear-gradient(to right, rgb(130, 38, 242) 0%, rgb(138, 244, 234) 50%, rgb(130, 38, 242) 100%);
    transition: width 0.3s ease;
  }
`;

const TabContent = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
  position: relative;
  z-index: 1;
  animation: ${props => props.active ? 'fadeIn 0.5s ease' : 'none'};
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ExperienceTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-left: 2px solid rgb(130, 38, 242);
  
  &:last-child {
    border-left: 2px solid transparent;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgb(130, 38, 242);
`;

const TimelineContent = styled.div`
  background: rgba(25, 8, 48, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  margin-left: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(130, 38, 242, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  color: rgb(138, 244, 234);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: rgb(252, 250, 255);
`;

const TimelineCompany = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  color: rgb(252, 250, 255);
`;

const TimelineDescription = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(252, 250, 255);
  
  ul {
    padding-left: 1.5rem;
  }
`;

const CompanyLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const CompanyLogo = styled.img`
  height: 60px;
  filter: grayscale(100%) brightness(1.5);
  transition: filter 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }
  
  &.pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(130, 38, 242, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(130, 38, 242, 0); }
    100% { box-shadow: 0 0 0 0 rgba(130, 38, 242, 0); }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillTag = styled.div`
  background: rgba(130, 38, 242, 0.2);
  border: 1px solid rgba(130, 38, 242, 0.3);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: background 0.3s ease, transform 0.3s ease;
  color: rgb(252, 250, 255);
  
  &:hover {
    background: rgba(130, 38, 242, 0.4);
    transform: translateY(-3px);
  }
`;

// Types
interface TimelineItemType {
  date: string;
  title: string;
  company: string;
  description: React.ReactNode;
}

interface CompanyType {
  name: string;
  logo: string;
}

interface SkillType {
  name: string;
}

const AboutVikasSection = () => {
  const [activeTab, setActiveTab] = useState<string>('experience');
  const [pulsing, setPulsing] = useState<string | null>(null);

  const handleLogoClick = (companyName: string) => {
    setPulsing(companyName);
    setTimeout(() => {
      setPulsing(null);
    }, 2000);
  };

  const experienceItems: TimelineItemType[] = [
    {
      date: 'November 2024 - Present',
      title: 'Independent Consulting',
      company: 'CISO, GRC, AI Risk Consulting',
      description: (
        <ul>
          <li>Pre-launch AI Agency – AI & Cybersecurity Risk advisor to the CEO</li>
          <li>EvolutionIQ – Tasked by the CSO to project manage evidence collection for HiTrust Audit</li>
          <li>Harness - Own SOC2 certification process and deliver final report within 60 days</li>
          <li>Big Pharma Vendor - Retained as the organization's first CSO to meet security/privacy compliance requirements</li>
        </ul>
      ),
    },
    {
      date: 'May 2024 - October 2024',
      title: 'VP, Information Security',
      company: 'InMarket Media LLC',
      description: (
        <ul>
          <li>Partnered with Counsel & C-Suite during FTC Order response</li>
          <li>Implemented foundational enterprise risk governance framework & library in partnership with Management, Legal & HR</li>
          <li>Delivered a 2 year, 3-phase, Enterprise Technology & Information security maturity plan to management</li>
          <li>Partnered with Sales and Legal teams to respond to Customer's information security assessments</li>
          <li>Revised & implemented policy framework including Internal Controls, Risk Management, Information Security & AI</li>
        </ul>
      ),
    },
    {
      date: 'March 2024 - May 2024',
      title: 'Cybersecurity Lead',
      company: 'National Geospatial Intelligence Agency (NGA)',
      description: (
        <ul>
          <li>Represented OIG during intra-intelligence Agency AI & Technology related risk assessments</li>
          <li>Oversaw FISMA Vulnerability Management audit in line with NGA OIG guidance and Yellow book Auditing Standards</li>
          <li>Reviewed FISMA assessments conducted by contractors to prepare audit work papers</li>
        </ul>
      ),
    },
    {
      date: 'May 2018 - February 2024',
      title: 'Founder, CEO & Chief Risk Officer',
      company: 'JustProtect Inc.',
      description: (
        <ul>
          <li>Oversaw all internal legal, compliance, privacy, product development, information security & technology risks</li>
          <li>Raised $750k in financing & oversaw product to $700k ARR</li>
          <li>Product owner for the JustProtect SaaS Risk Assessment platform (conducted 5k assessments with 60% efficiency)</li>
          <li>Finalist in ABB's Electrification challenge, "Cyber security assessment in electrical substations"</li>
          <li>Finalist in FDIC's "From Hurricanes to Ransomware: Measuring Resilience in the Banking World" Tech sprint</li>
        </ul>
      ),
    },
  ];

  const companies: CompanyType[] = [
    {
      name: 'EvolutionIQ',
      logo: 'https://www.evolutioniq.com/images/light%20A%20CCC%20Company.webp',
    },
    {
      name: 'JustProtect',
      logo: 'https://www.justprotect.co/hubfs/jp_logo_blue_v3.2@2x-1.png',
    },
    {
      name: 'National Geospatial Intelligence Agency',
      logo: 'https://www.nga.mil/portals/nga/images/nga-logo.png',
    },
    {
      name: 'InMarket Media',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Inmarket_logo.svg/1200px-Inmarket_logo.svg.png',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png',
    },
  ];

  const skills: SkillType[] = [
    { name: 'AI Security Governance' },
    { name: 'Enterprise Risk Management' },
    { name: 'Compliance Frameworks (SOC2, HITRUST)' },
    { name: 'Security Program Development' },
    { name: 'CISO Advisory' },
    { name: 'Vendor Risk Management' },
    { name: 'Security Assessments' },
    { name: 'Policy Framework Development' },
    { name: 'Executive Communication' },
    { name: 'Security Maturity Planning' },
    { name: 'FISMA Compliance' },
    { name: 'Product Security' },
    { name: 'Startup Security' },
    { name: 'Security Sales Enablement' },
    { name: 'TS/SCI/NATO Clearance' },
  ];

  return (
    <PageBackground id="about-vikas">
      <Container>
        <AboutSection>
          <SectionTitle>
            About <Highlight>Vikas</Highlight>
          </SectionTitle>
          
          <ProfileSection>
            <ProfileCard>
              <ProfileHeader>
                <ProfileImage 
                  src="https://media.licdn.com/dms/image/v2/C4D03AQFJwVMf2-PbSw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1559210662736?e=1755129600&v=beta&t=uGoon-cMTFHY0LYUWREiPz1sKwj44EkPIg3DdHZdpzg" 
                  alt="Vikas Bhatia" 
                />
                <ProfileTitle>
                  <h2>Vikas Bhatia</h2>
                  <p>Cybersecurity & Compliance Executive | AI Security Expert</p>
                </ProfileTitle>
              </ProfileHeader>
              
              <ProfileBio>
                Innovative, business-first and executive-facing cleared (TS/SCI/NATO – with Poly) Cyber risk / compliance professional with over 25 years of experience. Delivered mission-critical solutions at every stage of the implementation lifecycle to over 130+ companies. Specialized in AI security governance, enterprise risk management, and enabling business through effective security leadership.
              </ProfileBio>
              <ResumeLink href="https://suj400us-my.sharepoint.com/:w:/g/personal/vikas_justprotect_co/ES3AogSYhw9GhRuOWCwxf1sB7tqnsqtu2kZfAlR-ZoleeQ?e=b8a9qf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFileAlt} /> Resume
              </ResumeLink>
              <SocialLinks>
                <SocialLink href="https://www.linkedin.com/in/vikasbhatiauk" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialLink>
                <SocialLink href="https://x.com/vikasbhatiauk" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </SocialLink>
                <SocialLink href="mailto:vikasbhatiauk@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </SocialLink>
              </SocialLinks>
            </ProfileCard>
          </ProfileSection>
          
          <TabsContainer>
            <TabButton 
              active={activeTab === 'experience'} 
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </TabButton>
            <TabButton 
              active={activeTab === 'companies'} 
              onClick={() => setActiveTab('companies')}
            >
              Companies
            </TabButton>
            <TabButton 
              active={activeTab === 'skills'} 
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </TabButton>
          </TabsContainer>
          
          <TabContent active={activeTab === 'experience'}>
            <ExperienceTimeline>
              {experienceItems.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineCompany>{item.company}</TimelineCompany>
                    <TimelineDescription>{item.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </ExperienceTimeline>
          </TabContent>
          
          <TabContent active={activeTab === 'companies'}>
            <CompanyLogos>
              {companies.map((company, index) => (
                <CompanyLogo 
                  key={index} 
                  src={company.logo} 
                  alt={company.name} 
                  className={pulsing === company.name ? 'pulse' : ''}
                  onClick={() => handleLogoClick(company.name)}
                />
              ))}
            </CompanyLogos>
          </TabContent>
          
          <TabContent active={activeTab === 'skills'}>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillTag key={index}>{skill.name}</SkillTag>
              ))}
            </SkillsContainer>
          </TabContent>
        </AboutSection>
      </Container>
    </PageBackground>
  );
};

export default AboutVikasSection; 