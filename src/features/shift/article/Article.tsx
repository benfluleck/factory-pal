import type { FC } from "react";
import {
  categoryKeyEnum,
  type MetricsData,
} from "../../../entities/metricsData";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import { filterMetricsByCategory } from "../../../utils/utils";
import DonutChart from "../../../components/Chart/Donut/DonutChart";

type ShiftArticleProps = {
  metricsData: MetricsData[];
  onMetricSelect: (metricId: string | null) => void;
  selectedMetricId: string | null;
};

const ShiftArticle: FC<ShiftArticleProps> = ({
  metricsData,
  onMetricSelect,
  selectedMetricId,
}) => {
  const shiftData = filterMetricsByCategory(
    metricsData,
    categoryKeyEnum.enum.shift
  );

  if (shiftData.length === 0) return null;

  const transformedData = () => {
    const shiftDurationValue = shiftData.find(
      (metric) => metric.id === "shift_duration"
    )?.value;

    const cleanedShiftDataValue = shiftData.find(
      (metric) => metric.id === "cln_shift"
    )?.value;

    if (!shiftDurationValue || !cleanedShiftDataValue) {
      console.warn("Shift duration or cleaned shift data is missing");
      return [];
    }

    const shiftDurationRatio =
      shiftDurationValue * 60 * 60 - cleanedShiftDataValue;

    return [
      {
        id: shiftData[0].id,
        name: shiftData[0].label,
        value: cleanedShiftDataValue,
        category: categoryKeyEnum.enum.shift,
        originalValue: shiftData[0].value,
        fill: "#8884d8",
      },
      {
        id: shiftData[1].id,
        name: "Remaining Shift Duration",
        value: shiftDurationRatio,
        category: categoryKeyEnum.enum.shift,
        originalValue: shiftData[1].value * 60 * 60,
        fill: "#82ca9d",
      },
    ];
  };

  const donutData = transformedData();

  return (
    <ArticleCard title="Shift Metrics" id="shift-metrics">
      {donutData.length > 0 && (
        <DonutChart
          selectedMetricId={selectedMetricId}
          onMetricSelect={onMetricSelect}
          data={donutData}
          value="value"
          title="Shift Metrics"
          description={shiftData[0].description}
        />
      )}
    </ArticleCard>
  );
};

export default ShiftArticle;
