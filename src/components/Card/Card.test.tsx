import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/testUtils";
import Card from "./Card";
import { metricTypesEnum } from "../../entities/metricsData";

describe("Card Component", () => {
  const mockProps = {
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


  it("displays the title", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("displays the value", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(`${mockProps.value}`)).toBeInTheDocument();
  });

});
