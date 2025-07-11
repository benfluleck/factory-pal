import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../utils/testUtils";
import CardList from "./CardList";
import { mockMetricsData } from "../../__mocks__/fixtures/metrics";

describe("CardList Component", () => {  
  it("renders without crashing", () => {
    const { getByTestId } = render(
      <CardList items={mockMetricsData} onClick={() => {}} selectedId={null} />
    );
    const cardListElement = getByTestId("card-list");
    expect(cardListElement).toBeInTheDocument();
  });

  it("displays the correct number of cards", () => {
    render(<CardList items={mockMetricsData} onClick={() => {}} selectedId={null} />);
    expect(screen.getAllByTestId("card")).toHaveLength(mockMetricsData.length);
  });

  it("applies the correct styles to selected card", () => {
    const { getAllByTestId } = render(
      <CardList items={mockMetricsData} onClick={() => {}} selectedId="1" />
    );
    const selectedCard = getAllByTestId("card")[0];
    expect(selectedCard).toHaveStyle({
      border: "2px solid #1D284F",
    });
  });

  it("calls onClick handler when a card is clicked", () => {
    const handleClick = vi.fn();
    const { getAllByTestId } = render(
      <CardList items={mockMetricsData} onClick={handleClick} selectedId={null} />
    );
    const cardElement = getAllByTestId("card")[0];
    cardElement.click();
    expect(handleClick).toHaveBeenCalled();
  });
}
);
