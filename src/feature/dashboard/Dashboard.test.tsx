import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "../../utils/testUtils";
import Dashboard from "./Dashboard";
import { mockMetricsData } from "../../__mocks__/fixtures/metrics";
import { categoryKeyEnum, type CategoryKey } from "../../entities/metricsData";

describe("Dashboard Component", () => {
  const mockProps = {
    metricsData: [...mockMetricsData],
    onMetricSelect: () => {},
    selectedCategory: "All" as CategoryKey,
    tableHeaders: [
      "Metric",
      "Value",
      "Unit",
      "Description",
      "Category",
      "Type",
    ],
    selectedMetricId: null,
    handleCategoryChange: () => {},
    handleCardListClick: () => {},
    handleMetricSelect: () => {},
    handleRowClick: () => {}, 
  };

  it("renders without crashing", () => {
    render(<Dashboard {...mockProps} />);
    const dashboardElement = screen.getByText("Factory Metrics Dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<Dashboard {...mockProps} />);
    const titleElement = screen.getByText("Factory Metrics Dashboard");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the article cards for all metric when selectedCategory is 'All", () => {
    render(<Dashboard {...mockProps} />);
    const articleCards = screen.getAllByTestId("article-card");
    expect(articleCards.length).toBe(categoryKeyEnum.options.length);
  });

  it("renders the article for selected category", () => {
    const selectedCategory = categoryKeyEnum.enum.efficiency;
    render(<Dashboard {...mockProps} selectedCategory={selectedCategory} />);
    const articleCards = screen.getAllByTestId("article-card");
    expect(articleCards.length).toBe(
      1
    );    
  });

  it("renders the card list with correct data", () => {
    render(<Dashboard {...mockProps} />);
    const cardList = screen.getByTestId("card-list");
    expect(cardList).toBeInTheDocument();
    const cardItems = screen.getAllByTestId("card");
    expect(cardItems.length).toBe(mockProps.metricsData.length);
  });

  it("renders the table with correct headers", () => {
    render(<Dashboard {...mockProps} />);
    const tableHeaders = screen.getAllByRole("columnheader");
    expect(tableHeaders.length).toBe(mockProps.tableHeaders.length);
    mockProps.tableHeaders.forEach((header, index) => {
      expect(tableHeaders[index]).toHaveTextContent(header);
    });
  });

  it("handles category change correctly", () => {
    const handleCategoryChange = vi.fn();
    render(<Dashboard {...mockProps} handleCategoryChange={handleCategoryChange} />);
    const categorySelect = screen.getByRole("combobox");
    expect(categorySelect).toBeInTheDocument();
    fireEvent.change(categorySelect, { target: { value: categoryKeyEnum.enum.efficiency } });
    expect(handleCategoryChange).toHaveBeenCalledWith("efficiency");
  });

  it("handles card list click correctly", () => {
    const handleCardListClick = vi.fn();
    render(<Dashboard {...mockProps} handleCardListClick={handleCardListClick} />);
    const cardList = screen.getByTestId("card-list");
    fireEvent.click(cardList);
    expect(handleCardListClick).toHaveBeenCalled();
  });

  it("handles row click correctly", () => {
    const handleRowClick = vi.fn();
    render(<Dashboard {...mockProps} handleRowClick={handleRowClick} />);
    const tableRow = screen.getByTestId("table");
    fireEvent.click(tableRow);
    expect(handleRowClick).toHaveBeenCalled();
  });


});
