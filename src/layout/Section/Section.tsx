import type { FC } from "react";
import styled from "styled-components";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.xl} 0;

  > header {
    margin-bottom: ${({ theme }) => theme.space.lg};
  }
  
`;

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionContainer data-testid="section" aria-label={`${title} Section`}>
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </SectionContainer>
  );
};

export default Section;
