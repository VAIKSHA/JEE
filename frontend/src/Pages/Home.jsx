import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Typical from 'react-typical';
import ContactUs from '../Pages/Contact'; 
import Aboutus from './Aboutus';

// Import images
import home from '../Images/home2.png';
import best1 from '../Images/best1.png';
import best2 from '../Images/best2.png';
import best3 from '../Images/best3.png';
import StudyM from './StudyM';

// Styled Components
const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: 70px;

  @media (max-width: 768px) {
    height: 35vh;
  }
`;

const HomeImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 30vh;
    object-fit: contain;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
    left: 20px;
  }
`;

const StatsFeaturesContainer = styled.div`
  background-color: rgb(253, 247, 239);
  padding: 100px 40px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 50px; /* Adds spacing between stats and features */
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  }
`;

// Reusable Components
const StatItem = ({ image, value, label }) => (
  <div style={{ textAlign: 'center' }}>
    <img
      src={image}
      alt={label}
      style={{ width: '80px', height: '80px', marginBottom: '10px' }}
    />
    <div className="stat-value" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{value}</div>
    <div className="stat-label" style={{ color: '#666' }}>{label}</div>
  </div>
);

StatItem.propTypes = {
  image: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// Styled Component for FeatureItem with hover effect
const FeatureItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  padding: 40px 0;

  &:hover {
    transform: translateY(-10px); /* Moves the feature up slightly */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
  }
`;

const FeatureImage = styled.img`
  width: 250px;
  height: 150px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const FeatureItem = ({ image, title }) => (
  <FeatureItemContainer>
    <FeatureImage src={image} alt={title} />
    <FeatureTitle>{title}</FeatureTitle>
  </FeatureItemContainer>
);

FeatureItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// Main Component
export default function Home() {
  const stats = [
    { image: best1, value: '30 Years', label: 'Experience' },
    { image: best2, value: '80K+', label: 'Students' },
    { image: best3, value: '20+', label: 'Courses' },
    { image: best3, value: '40+', label: 'Centres' },
  ];

  const features = [
    { image: best1, title: 'Comprehensive Study Material' },
    { image: best2, title: 'Best Integrated Teaching' },
    { image: best3, title: 'Highly Qualified & Experienced Faculty' },
  ];

  return (
    <>
      <Navbar />
      <HomeContainer>
        <HomeImage src={home} alt="Home" />
        <OverlayText>
          <Typical
            steps={[
              'Welcome JEE Aspirants!',
              5000,
              'Explore the world with us!',
              5000,
              'Talk with IITians & NITians!',
              5000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </OverlayText>
      </HomeContainer>

      {/* Courses */}
      <StudyM />
      
      {/* About Section */}
      <Aboutus />

      <StatsFeaturesContainer>
        {/* Stats Section */}
        <Section>
          <Grid columns={4}>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                image={stat.image}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </Grid>
        </Section>

        {/* Features Section */}
        <Section>
          <Grid columns={3}>
            {features.map((feature, index) => (
              <FeatureItem key={index} image={feature.image} title={feature.title} />
            ))}
          </Grid>
        </Section>
      </StatsFeaturesContainer>

      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
}