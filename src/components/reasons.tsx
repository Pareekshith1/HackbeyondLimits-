import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: transparent;
  color: #e6d5b8; /* Golden text color */
  padding: 4rem 2rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const Subtitle = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  color: #f2e3c6;
  display: block;
  margin-bottom: 0.5rem;
`;

const ReasonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
`;

const ReasonItem = styled.div<{ isRaised: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 180px; /* Set a consistent width */
  position: relative;
  margin-top: ${({ isRaised }) => (isRaised ? "40px" : "80px")};
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffd700; /* Gold icon color */
`;

const TextWrapper = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #e6d5b8;
`;

const reasonsData = [
  {
    icon: "🏆",
    text: "Exciting vouchers worth ₹50,000 and other attractive prizes await the top 3 teams.",
    isRaised: false,
  },
  {
    icon: "🎨",
    text: "Special awards for the best innovative idea and UI/UX design.",
    isRaised: true,
  },
  {
    icon: "🎁",
    text: "Exclusive goodies and gift vouchers for all-girls teams.",
    isRaised: false,
  },
  {
    icon: "💡",
    text: "Opportunities for idea development and funding for the most innovative ideas by companies.",
    isRaised: true,
  },
  {
    icon: "🤝",
    text: "A chance to connect with industry experts and gain mentorship to elevate your project.",
    isRaised: false,
  },
];

const ReasonsSection: React.FC = () => {
  return (
    <Section>
      <TitleWrapper>
        <Subtitle>Top Five</Subtitle>
        <Title>Reasons to Participate</Title>
      </TitleWrapper>
      <ReasonsWrapper>
        {reasonsData.map((reason, index) => (
          <ReasonItem key={index} isRaised={index % 2 !== 0}>
            <IconWrapper>{reason.icon}</IconWrapper>
            <TextWrapper>{reason.text}</TextWrapper>
          </ReasonItem>
        ))}
      </ReasonsWrapper>
    </Section>
  );
};

export default ReasonsSection;
