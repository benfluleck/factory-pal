import type { FC } from "react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import {
  categoryKeyEnum,
  type MetricsData,
} from "../../../entities/metricsData";
import {
  filterMetricsByCategory,
  groupMetricsByTypes,
} from "../../../utils/utils";
import DonutChart from "../../../components/Chart/Donut/DonutChart";
import BarChart from "../../../components/Chart/BarChart/BarChart";
import { transformDataForDonutChart } from "../utils/utils";

type EfficiencyArticleProps = {
  metricsData: MetricsData[];
  onMetricSelect: (metricId: string | null) => void;
  selectedMetricId: string | null;
};

const EfficiencyArticle: FC<EfficiencyArticleProps> = ({
  metricsData,
  onMetricSelect,
  selectedMetricId,
}) => {
  const efficiencyData = filterMetricsByCategory(
    metricsData,
    categoryKeyEnum.enum.efficiency
  );

  if (efficiencyData.length === 0) return null;

  const groupedData = groupMetricsByTypes(efficiencyData);
  const percentageData = groupedData.percentage || [];
  const numberData = groupedData.number || [];

  const transformedDonutData = transformDataForDonutChart(percentageData);

  const transformedBarData = numberData.map((metric) => ({
    id: metric.id,
    name: metric.label,
    value: Math.abs(metric.value),
    category: metric.category,
    type: metric.type,
    originalValue: metric.value,
  }));

  return (
    <ArticleCard title="Efficiency Metrics" id="efficiency-metrics">
      {percentageData.length > 0 && (
        <DonutChart
          value="value"
          title="Efficiency Metrics"
          data={transformedDonutData}
          description={percentageData[0].description}
          onMetricSelect={onMetricSelect}
          selectedMetricId={selectedMetricId}
        />
      )}
      {numberData.length > 0 && (
        <BarChart
          data={transformedBarData}
          onMetricSelect={onMetricSelect}
          description="Loss of Productivity"
          selectedMetricId={selectedMetricId}
        />
      )}
    </ArticleCard>
  );
};

export default EfficiencyArticle;
