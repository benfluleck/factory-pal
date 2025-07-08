import type { FC } from "react";
import styled from "styled-components";
import type { CategoryKey } from "../../entities/metricsData";

type SelectProps = {
  selected: string;
  onChange: (value: CategoryKey | "All") => void;
  options: string[];
};

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
const StyledSelect = styled.select`
  padding: 0.5rem;
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

const Select: FC<SelectProps> = ({ selected, onChange, options }) => {
  return (
    <SelectContainer>
      <StyledLabel htmlFor="select">Choose a category:</StyledLabel>
      <StyledSelect
        id="select"
        onChange={(e) => onChange(e.target.value as CategoryKey | "All")}
        value={selected}
      >
        <option value="All">All</option>
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
