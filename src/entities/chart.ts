import type { MetricsData } from "./metricsData";

export type MetricBarChartData = Omit<MetricsData, "label" | "description"> & {
  originalValue: number;
  name: string;
};

export type MetricDonutChartData = Omit<MetricsData, "label" | "description"> & {
  originalValue: number;
  name: string;
};
