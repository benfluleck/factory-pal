import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "../../utils/testUtils";
import Select from "./Select";

describe("Select Component", () => {
  const mockData = {
    selected: "option1",
    onChange: vi.fn(),
    options: ["option1", "option2", "option3"],
    title: "Select category",
  };


  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Select
        {...mockData}
      />
    );
    const selectElement = getByTestId("select");
    expect(selectElement).toBeInTheDocument();
  });

  it("displays the selected option", () => {
    const { getByText } = render(
      <Select
        {...mockData}
      />
    );
    expect(getByText("option1")).toBeInTheDocument();
  });

  it("shows 'option 1' as the first option", () => {
    render(<Select {...mockData} />);

    const optionElements = screen.getAllByRole("option");
    expect(optionElements[0]).toHaveTextContent("option1");
  });

  it("calls onChange when an option is selected", () => {
    const handleChange = vi.fn();
    const { getByTestId } = render(
      <Select {...mockData} onChange={handleChange} />
    );
    fireEvent.change(getByTestId("select"), {
      target: { value: "option2" },
    });
    expect(handleChange).toHaveBeenCalledWith("option2");
  });

  it("renders all options in the dropdown", () => {
    const { getByText } = render(
      <Select {...mockData} />
    );
    mockData.options.forEach((option) => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });
});
