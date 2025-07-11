import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/testUtils";
import CardList from "./CardList";
import { mockMetricsData } from "../../__mocks__/fixtures/metrics";
import { formatMetricValue } from "../../utils/utils";

describe("CardList Component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<CardList items={mockMetricsData} />);
    const cardListElement = getByTestId("card-list");
    expect(cardListElement).toBeInTheDocument();
  });

  it("displays the correct number of cards", () => {
    render(<CardList items={mockMetricsData} />);
    expect(screen.getAllByTestId("card")).toHaveLength(mockMetricsData.length);
  });
  it("displays the correct data in each card", () => {
    render(<CardList items={mockMetricsData} />);
    mockMetricsData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(formatMetricValue(item))).toBeInTheDocument();
    });
  });
});
