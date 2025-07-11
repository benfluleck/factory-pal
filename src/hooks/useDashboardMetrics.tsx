import { useState } from "react";
import type { CategoryKey } from "../entities/metricsData";
import { filterMetricsByCategory } from "../utils/utils";
import useMetricsData from "./useMetricsData";
import { ALL } from "../utils/constants";

const useDashboardMetrics = () => {
  const { metricsData, status, headers } = useMetricsData();

  const [selectedMetricId, setSelectedMetricId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | ALL>(
    ALL
  );

  const filteredItems =
    selectedCategory === ALL
      ? metricsData
      : filterMetricsByCategory(metricsData, selectedCategory);

  const handleCategoryChange = (value: CategoryKey | ALL) => {
    setSelectedCategory(value);
    setSelectedMetricId(null);
  };

  const handleRowClick = (event: React.MouseEvent<HTMLTableElement>) => {
    const target = event.target as HTMLElement;
    const rowElement = target.closest("tr");
    if (rowElement) {
      const itemId = rowElement.getAttribute("data-id");
      const [rowId, category] = itemId?.split("-") || [];

      setSelectedMetricId(rowId);
      document.getElementById(`${category}-metrics`)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleMetricSelect = (metricId: string | null) => {
    setSelectedMetricId(metricId);
  };

  return {
    selectedMetricId,
    filteredItems,
    handleCategoryChange,
    handleMetricSelect,
    handleRowClick,
    selectedCategory,
    status,
    headers,
  };
};

export default useDashboardMetrics;
