import type { FC } from "react";
import styled from "styled-components";
import type { CategoryKey } from "../../entities/metricsData";
import type { ALL } from "../../utils/constants";

type SelectProps = {
  selected: string;
  onChange: (value: CategoryKey | ALL) => void;
  options: string[];
  title: string;
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.space.md} 0;
  padding: ${({ theme }) => theme.space.sm} 0;
`;
const StyledLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.space.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
const StyledSelect = styled.select`
  padding: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Select: FC<SelectProps> = ({ selected, onChange, options, title }) => {
  return (
    <SelectContainer data-testid="select-container">
      <StyledLabel data-cy="select-label" htmlFor="select">{title}</StyledLabel>
      <StyledSelect
        id="select"
        data-testid="select"
        aria-label="Select category"
        aria-required="true"
        onChange={(e) => onChange(e.target.value as CategoryKey | ALL)}
        value={selected}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};
export default Select;
