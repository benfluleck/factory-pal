import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "../../utils/testUtils";
import Select from "./Select";

describe("Select Component", () => {
  const options  = [
   "option1",
   "option2",
   "option3",
  ];

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Select selected="option1" onChange={() => {}} options={options} />
    );
    const selectElement = getByTestId("select");
    expect(selectElement).toBeInTheDocument();
  });

  it("displays the selected option", () => {
    const { getByText } = render(
      <Select selected="option1" onChange={() => {}} options={options} />
    );
    expect(getByText("option1")).toBeInTheDocument();
  });

  it("shows 'option 1' as the first option", () => {
     render(
      <Select selected="option1" onChange={() => {}} options={options} />
    );
 
    const optionElements = screen.getAllByRole("option");
    expect(optionElements[0]).toHaveTextContent("option1");
    
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(
      <Select selected="option1" onChange={handleChange} options={options} />
    );
    fireEvent.change(getByTestId("select"), {
      target: { value: "option2" },
    });
    expect(handleChange).toHaveBeenCalledWith("option2");
  });

  it("renders all options in the dropdown", () => {
    const { getByText } = render(
      <Select selected="option1" onChange={() => {}} options={options} />
    );
    options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
