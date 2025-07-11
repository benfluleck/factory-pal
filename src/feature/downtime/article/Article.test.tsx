import { describe, it, expect } from "vitest";
import { render, screen } from "../../../utils/testUtils";
import DowntimeArticle from "./Article";
import { mockMetricsData } from "../../../__mocks__/fixtures/metrics";
import type { MetricsData } from "../../../entities/metricsData";

describe("Downtime Component", () => {
  it("renders a article card without crashing", () => {
    render(
      <DowntimeArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    const articleElement = screen.getByTestId("article-card");

    expect(articleElement).toBeInTheDocument();
  });

  it("has the correct role and aria-label", () => {
    const { getByRole } = render(
      <DowntimeArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const articleElement = getByRole("article");
    expect(articleElement).toHaveAttribute("aria-label", "Downtime Metrics Article");
    expect(articleElement).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(
      <DowntimeArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );
    const titleElement = screen.getByText("Downtime Metrics");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the BarChart when percentage data is available", () => {
    render(
      <DowntimeArticle
        metricsData={mockMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    const donutChartElement = screen.getByTestId("bar-chart");
    expect(donutChartElement).toBeInTheDocument();
  });

  it("does not render the article when no efficiency data is available", () => {
    const emptyMetricsData = [] as MetricsData[];
    const { container } = render(
      <DowntimeArticle
        metricsData={emptyMetricsData}
        onMetricSelect={() => {}}
        selectedMetricId={null}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
