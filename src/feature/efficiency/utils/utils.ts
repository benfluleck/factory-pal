
import type { MetricsData } from "../../../entities/metricsData";

export const transformDataForDonutChart = (data: MetricsData[]) => {
  const result = data.map((metric) => ({
    id: metric.id,
    name: metric.label,
    value: metric.value,
    fill:  "#8884d8",
  }));

  const difference = 1 - data.reduce((acc, metric) => acc + metric.value, 0);

  return [
    ...result,
    {
      id: "other",
      name: "Other",
      value: Number(difference.toFixed(2)),
      fill: "#ccc", 
    },
  ];
};
