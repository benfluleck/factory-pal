import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/testUtils";
import Card from "./Card";
import { metricTypesEnum } from "../../entities/metricsData";

describe("Card Component", () => {
  const mockProps = {
    $isSelected: false,
    id: "test-id",
    title: "Test Metric",
    type: metricTypesEnum.enum.percentage,
    value: 75,
    description: "This is a test metric",
  };

  it("renders without crashing", () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    const cardElement = getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });
  it("has the correct role and aria-label", () => {
    const { getByRole } = render(<Card {...mockProps} />);
    const cardElement = getByRole("button");
    expect(cardElement).toHaveAttribute("aria-pressed", "false");
    expect(cardElement).toBeInTheDocument();
  });

  it("has the correct data-index attribute", () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    const cardElement = getByTestId("card");
    expect(cardElement).toHaveAttribute("data-index", mockProps.id);
  });

  it("displays the title", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("displays the value", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(`${mockProps.value}`)).toBeInTheDocument();
  });

  it("applies the correct styles based on isSelected prop", () => {
    const { rerender, getByTestId } = render(<Card {...mockProps} />);
    const cardElement = getByTestId("card");

    expect(cardElement).toHaveStyle({
      border: "2px solid transparent",
    });

    rerender(<Card {...{ ...mockProps, $isSelected: true }} />);

    expect(cardElement).toHaveStyle({
      border: "2px solid #1D284F",
    });
  });
});
