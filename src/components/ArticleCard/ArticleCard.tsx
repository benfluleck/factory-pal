import type { FC } from "react";
import styled from "styled-components";

type ArticleCardProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
};

const ArticleCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  transition: all 0.2s ease;
`;

const ArticleCardContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const ArticleCard: FC<ArticleCardProps> = ({ title, children, id }) => {
  return (
    <ArticleCardContainer
      data-testid="article-card"
      aria-label={`${title} Article`}
      id={id}
    >
      <header>
        <h3>{title}</h3>
      </header>
      <ArticleCardContent>{children}</ArticleCardContent>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
