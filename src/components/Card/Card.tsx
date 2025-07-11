import type { FC } from "react";
import styled from "styled-components";
import { metricTypesEnum, type MetricTypes } from "../../entities/metricsData";

type CardProps = {
  $isSelected: boolean;
  id: string;
  title: string;
  value: string | number;
  type: MetricTypes;
  description?: string;
};

const CardContainer = styled.button<{ $isSelected: boolean }>`
  text-align: left;
  margin: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 2px solid
    ${({ $isSelected, theme: { colors } }) =>
      $isSelected ? colors.cardBackground : colors.transparent};
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow.cardHover};
  }
`;

const CardBody = styled.dl``;

const CardTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.space.sm};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.headerText};
`;

const CardValue = styled.dt<{ type: MetricTypes }>`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ type, theme: { colors } }) => {
    switch (type) {
      case metricTypesEnum.enum.percentage:
        return colors.percentage;
      case metricTypesEnum.enum.number:
        return colors.number;
      case metricTypesEnum.enum.secs:
        return colors.secs;
      case metricTypesEnum.enum.hours:
        return colors.hours;
      default:
        return colors.text;
    }
  }};
`;

const CardDescription = styled.dd`
  margin: ${({ theme }) => theme.space.sm} 0 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Card: FC<CardProps> = ({
  $isSelected,
  title,
  id,
  type,
  value,
  description,
}) => (
  <CardContainer
    $isSelected={$isSelected}
    data-index={id}
    data-testid="card"
    aria-pressed={$isSelected}
  >
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardValue type={type}>{value}</CardValue>
      <CardDescription>{description}</CardDescription>
    </CardBody>
  </CardContainer>
);

export default Card;
