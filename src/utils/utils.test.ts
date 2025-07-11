import { describe, it, expect } from "vitest";
import { formatMetricValue, filterMetricsByCategory, groupMetricsByTypes } from "./utils";
import { metricTypesEnum, categoryKeyEnum } from "../entities/metricsData";
import type { MetricsData } from "../entities/metricsData";


describe("Utils Functions", () => {
  const mockMetrics: MetricsData[] = [
    { id: "1", label: "Metric 1", value: 0.5, type: metricTypesEnum.enum.percentage, category: categoryKeyEnum.enum.downtime, description: "Test metric 1" },
    { id: "2", label: "Metric 2", value: 100, type: metricTypesEnum.enum.number, category: categoryKeyEnum.enum.efficiency, description: "Test metric 2" },
    { id: "3", label: "Metric 3", value: .60, type: metricTypesEnum.enum.percentage, category: categoryKeyEnum.enum.downtime, description: "Test metric 3" },
    { id: "4", label: "Metric 4", value: 120, type: metricTypesEnum.enum.hours, category: categoryKeyEnum.enum.shift, description: "Test metric 4" },
  ];

  it("should format metric values correctly", () => {
    expect(formatMetricValue(mockMetrics[0])).toBe("50%");
    expect(formatMetricValue(mockMetrics[1])).toBe("100");
    expect(formatMetricValue(mockMetrics[2])).toBe("60%");
    expect(formatMetricValue(mockMetrics[3])).toBe("120 hrs");
  });

  it("should filter metrics by category", () => {
    const filtered = filterMetricsByCategory(mockMetrics, categoryKeyEnum.enum.downtime );
    expect(filtered).toHaveLength(2);
    expect(filtered[0].id).toBe("1");
    expect(filtered[1].id).toBe("3");
  });

  it("should group metrics by types", () => {
    const grouped = groupMetricsByTypes(mockMetrics);
    expect(grouped.percentage).toHaveLength(2);
    expect(grouped.number).toHaveLength(1);
    expect(grouped.hours).toHaveLength(1);
  });
});
