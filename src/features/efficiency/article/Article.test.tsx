import { describe, it, expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import EfficiencyArticle from "./Article";
import { mockMetricsData } from "../../../__mocks__/fixtures/metrics";
import type { MetricsData } from "../../../entities/metricsData";


describe("Efficiency Component", () => {
  it("renders a article card without crashing", async() => {
     render(
      <EfficiencyArticle
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
      <EfficiencyArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const articleElement = getByRole("article");
    expect(articleElement).toHaveAttribute("aria-label", "Efficiency Metrics Article");
    expect(articleElement).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(
      <EfficiencyArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const titleElement = screen.getByText("Efficiency Metrics");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the DonutChart when percentage data is available", () => {
    render(
      <EfficiencyArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const donutChartElement = screen.getByTestId("donut-chart");
    expect(donutChartElement).toBeInTheDocument();
  });

  it("does not render the article when no efficiency data is available", () => {
    const emptyMetricsData = [] as MetricsData[];
    const { container } = render(
      <EfficiencyArticle
        metricsData={emptyMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
