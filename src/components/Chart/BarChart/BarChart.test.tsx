import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import BarChart from "./BarChart";
import type { ResponsiveContainerProps } from "recharts";
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

describe("BarChart Component", () => {
  const mockData = [
    ...mockChartData
  ];

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <BarChart
        data={mockData}
        selectedMetricId={null}
        onMetricSelect={() => {}}
      />
    );
    const barChartElement = getByTestId("bar-chart");
    expect(barChartElement).toBeInTheDocument();
  });

  it("displays the correct number of bars", async () => {
    render(
      <BarChart
        data={mockData}
        selectedMetricId={null}
        onMetricSelect={() => {}}
      />
    );

    const bars = [];
    bars[0] = screen.getByText("Metric 1");
    bars[1] = screen.getByText("Metric 2");
    bars[2] = screen.getByText("Metric 3");


    expect(bars.length).toBe(mockData.length);
  });

});
