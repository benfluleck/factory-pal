import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/testUtils";
import Table from "./Table";
import { mockMetricsData } from "../../__mocks__/fixtures/metrics";

describe("Table Component", () => {
  const mockData = [...mockMetricsData];

  const mockHeaders = [
    "header1",
    "header2",
    "header3",
    "header4",
    "header5",
    "header6",
  ];

  const MockTableComponent = () => (
    <Table
      items={mockData}
      headers={mockHeaders}
      title="Test Table"
      getHeader={(header) => <th key={header}>{header}</th>}
      getDataId={(item) => item.id}
      getRow={(item) => (
        <>
          <td>{item.id}</td>
          <td>{item.label}</td>
          <td>{item.value}</td>
          <td>{item.type}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
        </>
      )}
      getKey={(item) => item.id}
    />
  );

  it("renders without crashing", () => {
    render(<MockTableComponent />);
    const tableElement = screen.getByTestId("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("displays the correct number of rows", () => {
    render(<MockTableComponent />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(mockData.length + 1);
  });

  it("displays the correct data in each cell", () => {
    render(<MockTableComponent />);
    mockData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });
  it("renders the headers correctly", () => {
    render(<MockTableComponent />);
    mockHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
  it("applies the correct styles to the table", () => {
    render(<MockTableComponent />);
    const tableElement = screen.getByTestId("table");
    expect(tableElement).toHaveStyle({
      width: "100%",
      borderCollapse: "collapse",
      margin: "0.5rem 0px",
      fontSize: "1rem",
      textAlign: "center",
      border: "1px solid #1A1A1A",
    });
  });

  it("applies the correct styles to the header cells", () => {
    const { container } = render(<MockTableComponent />);
    const headerCells = container.querySelectorAll("th");
    headerCells.forEach((cell) => {
      expect(cell).toHaveStyle({
        backgroundColor: "#007BFF",
        color: "#FFFFFF",
      });
    });
  });


});
