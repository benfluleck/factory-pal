import { describe, it, expect, vi } from "vitest";
import { render, screen } from "../src/utils/testUtils";
import App from "./App";
import * as useMetricsDataHook from "./hooks/useMetricsData";
import { mockMetricsData } from "./__mocks__/fixtures/metrics";
import { StatusSchema } from "./entities/status";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
  });
  it("has the correct role and aria-label", () => {
    const { getByRole } = render(<App />);
    const appElement = getByRole("main");
    expect(appElement).toHaveAttribute(
      "aria-label",
      "FactoryPal Metrics Dashboard"
    );
    expect(appElement).toBeInTheDocument();
  });

  it("renders the Loading component when status is LOADING", () => {
    render(<App />);
    const loader = screen.getByLabelText("Loading...");

    screen.debug();
    expect(loader).toBeInTheDocument();
  });

  it("renders the Dashboard component when status is SUCCESS", () => {
    const useMetricsDataSpy = vi.spyOn(useMetricsDataHook, "default");
    useMetricsDataSpy.mockReturnValue({
      status: StatusSchema.enum.SUCCESS,
      headers: [
        "header1",
        "header2",
        "header3",
        "header4",
        "header5",
        "header6",
      ],
      metricsData: [...mockMetricsData],
      error: null,
      setMetricsData: vi.fn(),
      setStatus: vi.fn(),
    });

    const { rerender } = render(<App />);
    rerender(<App />);
    const dashboardElement = screen.getByText("Factory Metrics Dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });
});
