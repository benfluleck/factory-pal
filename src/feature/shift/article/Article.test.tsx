import { describe, it, expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import ShiftArticle from "./Article";
import { mockMetricsData } from "../../../__mocks__/fixtures/metrics";
import type { MetricsData } from "../../../entities/metricsData";

describe("ShiftArticle Component", () => {
  it("renders a article card without crashing", async () => {
    render(
      <ShiftArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={"ee"}
      />
    );
    const articleElement = screen.getByTestId("article-card");
    expect(articleElement).toBeInTheDocument();
  });

  it("has the correct role and aria-label", () => {
    const { getByRole } = render(
      <ShiftArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const articleElement = getByRole("article");
    expect(articleElement).toHaveAttribute(
      "aria-label",
      "Shift Metrics Article"
    );
    expect(articleElement).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(
      <ShiftArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const titleElement = screen.getByText("Shift Metrics");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the DonutChart when percentage data is available", () => {
    render(
      <ShiftArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    const donutChartElement = screen.getByTestId("donut-chart");
    expect(donutChartElement).toBeInTheDocument();
  });

  it("does not render the article when no data is available", () => {
    const emptyMetricsData = [] as MetricsData[];
    const { container } = render(
      <ShiftArticle
        metricsData={emptyMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
