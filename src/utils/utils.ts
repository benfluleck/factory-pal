import type { CategoryKey, MetricsData } from "../entities/metricsData";

export const filterMetricsByCategory = (
  metrics: MetricsData[],
  category: CategoryKey
): MetricsData[] => metrics.filter((metric) => metric.category === category);
