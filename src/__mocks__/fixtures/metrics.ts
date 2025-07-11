import type { MetricBarChartData } from "../../entities/chart";
import {
  categoryKeyEnum,
  metricTypesEnum,
  type MetricsData,
} from "../../entities/metricsData";

export const mockChartData: MetricBarChartData[] = [
  {
    name: "Metric 1",
    value: 100,
    id: "1",
    originalValue: 1000,
    category: categoryKeyEnum.enum.efficiency,
    type: metricTypesEnum.enum.number,
  },
  {
    name: "Metric 2",
    value: 200,
    id: "2",
    originalValue: 2000,
    category: categoryKeyEnum.enum.efficiency,
    type: metricTypesEnum.enum.number,
  },
  {
    name: "Metric 3",
    value: 300,
    id: "3",
    originalValue: 3000,
    category: categoryKeyEnum.enum.efficiency,
    type: metricTypesEnum.enum.number,
  },
];

export const mockMetricsData: MetricsData[] = [
  {
    id: "1",
    label: "Metric 1",
    value: 0.2,
    description: "This is metric 1",
    type: metricTypesEnum.enum.percentage,
    category: categoryKeyEnum.enum.efficiency,
  },
  {
    id: "2",
    label: "Metric 2",
    value: 100,
    description: "This is metric 2",
    type: metricTypesEnum.enum.number,
    category: categoryKeyEnum.enum.efficiency,
  },
  {
    id: "3",
    label: "Metric 3",
    value: 50,
    description: "This is metric 3",
    type: metricTypesEnum.enum.secs,
    category: categoryKeyEnum.enum.efficiency,
  },

  {
    id: "shift_duration",
    label: "Metric 4",
    value: 1.5,
    description: "This is metric 4",
    type: metricTypesEnum.enum.hours,
    category: categoryKeyEnum.enum.shift,
  },
  {
    id: "cln_shift",
    label: "Metric 5",
    value: 0.8,
    description: "This is metric 5",
    type: metricTypesEnum.enum.percentage,
    category: categoryKeyEnum.enum.shift,
  },

  {
    id: "6",
    label: "Metric 6",
    value: 120,
    description: "This is metric 6",
    type: metricTypesEnum.enum.number,
    category: categoryKeyEnum.enum.downtime,
  },
  {
    id: "7",
    label: "Metric 7",
    value: 300,
    description: "This is metric 7",
    type: metricTypesEnum.enum.secs,
    category: categoryKeyEnum.enum.downtime,
  },
];
