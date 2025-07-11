import type { FC } from "react";
import {
  categoryKeyEnum,
  type MetricsData,
} from "../../../entities/metricsData";
import { filterMetricsByCategory } from "../../../utils/utils";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import BarChart from "../../../components/Chart/BarChart/BarChart";

type DowntimeArticleProps = {
  metricsData: MetricsData[];
  selectedMetricId: string | null;
  onMetricSelect: (metricId: string | null) => void;
};

const DowntimeArticle: FC<DowntimeArticleProps> = ({
  metricsData,
  onMetricSelect,
  selectedMetricId,
}) => {
  const downtimeCategoryData = filterMetricsByCategory(
    metricsData,
    categoryKeyEnum.enum.downtime
  );

  if (downtimeCategoryData.length === 0) return null;

  const transformedBarData = downtimeCategoryData.map((metric) => ({
    id: metric.id,
    name: metric.label,
    value: Math.abs(metric.value),
    category: metric.category,
    type: metric.type,
    originalValue: metric.value,
  }));

  return (
    <ArticleCard title="Downtime Metrics" id="downtime-metrics">
      {downtimeCategoryData.length > 0 && (
        <BarChart
          data={transformedBarData}
          description="Downtime due to problems"
          selectedMetricId={selectedMetricId}
          onMetricSelect={onMetricSelect}
        />
      )}
    </ArticleCard>
  );
};

export default DowntimeArticle;
