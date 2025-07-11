import type { FC } from "react";
import Card from "../Card/Card";
import type { MetricTypes } from "../../entities/metricsData";
import styled from "styled-components";
import { formatMetricValue } from "../../utils/utils";

type CardListProps = {
  items: {
    id: string;
    label: string;
    type: MetricTypes;
    value: number;
    description: string;
  }[];
  ariaLabel?: string;
};

const CardListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.xl};
`;

const CardList: FC<CardListProps> = ({
  items,
  ariaLabel,
}) => {
  return (
    <CardListContainer
      aria-label={ariaLabel}
      data-testid="card-list"
    >
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.label}
          type={item.type}
          value={formatMetricValue(item)}
          description={item.description}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
