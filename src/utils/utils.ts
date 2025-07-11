import type { CategoryKey, MetricsData } from "../entities/metricsData";

export const filterMetricsByCategory = (
  metrics: MetricsData[],
  category: CategoryKey
): MetricsData[] => metrics.filter((metric) => metric.category === category);

export const formatMetricValue = (
  metric: Omit<MetricsData, "category" | "label" | "description" | "id">
): string => {
  const formattedValue = {
    percentage: `${metric.value * 100}%`,
    number: metric.value.toString(),
    secs: `${metric.value} s`,
    hours: `${metric.value} hrs`,
  };

  return formattedValue[metric.type] || metric.value.toString();
};

export const groupMetricsByTypes = (
  metrics: MetricsData[],
) => {
  return metrics.reduce((acc, metric) => {
    const { type } = metric;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(metric);
    return acc;
  }, {} as Record<string, MetricsData[]>);
};
