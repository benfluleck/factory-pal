import { describe, it, expect, vi } from "vitest";
import type { ResponsiveContainerProps } from "recharts";
import { render, screen } from "../../../utils/testUtils";
import { DonutChart } from "./DonutChart";
import { mockChartData } from "../../../__mocks__/fixtures/metrics";

vi.mock("recharts", async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockRecharts = await vi.importActual<any>("recharts");
  return {
    ...mockRecharts,
    ResponsiveContainer: ({ children }: ResponsiveContainerProps) => (
      <mockRecharts.ResponsiveContainer width={400} height={800}>
        {children}
      </mockRecharts.ResponsiveContainer>
    ),
  };
});

describe("Donut Component", () => {
  const mockData = [
    ...mockChartData
  ];

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <DonutChart
        data={mockData}
        selectedMetricId={null}
        onMetricSelect={() => {}}
        value="value"
        title="Test Donut Chart"
      />
    );
    const DonutElement = getByTestId("donut-chart");
    expect(DonutElement).toBeInTheDocument();
  });

  it("displays the correct number of slices", () => {
    render(
      <DonutChart
        data={mockData}
        selectedMetricId={null}
        onMetricSelect={() => {}}
        value="value"
        title="Test Donut Chart"
      />
    );
    const slices = [];
    slices[0] = screen.getByText("Metric 1");
    slices[1] = screen.getAllByText("Metric 2")[0];
    slices[2] = screen.getByText("Metric 3");
    expect(slices.length).toBe(mockData.length);
  });
});
