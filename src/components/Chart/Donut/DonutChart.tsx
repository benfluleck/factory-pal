import type { FC } from "react";
import {
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ChartWrapper } from "../../../layout/Chart/wrapper";

type DonutChartProps = {
  value: string;
  description?: string;
  title: string;
  data: Record<string, string | number>[];
  selectedMetricId: string | null;
  onMetricSelect: (metricId: string | null) => void;
};

export const DonutChart: FC<DonutChartProps> = ({
  value,
  data,
  description,
  title,
  selectedMetricId,
  onMetricSelect,
}) => {
  const handlePieClick = (data: PieSectorDataItem) => {
    if (data && data.payload) {
      const metricId = data.payload.id;
      onMetricSelect(selectedMetricId === metricId ? null : metricId);
    }
  };

  return (
    <ChartWrapper aria-labelledby="caption" data-testid="donut-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={350}
        minWidth={600}
      >
        <PieChart>
          <Pie
            data={data}
            data-testid="donut-slice"
            dataKey={value}
            innerRadius={60}
            strokeWidth={5}
            onClick={handlePieClick}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 10} />
            )}
          />
          <Label
            value={title}
            position="center"
            fill="grey"
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          />
          <Legend verticalAlign="top" height={24} />
          <Tooltip defaultIndex={1} />
        </PieChart>
      </ResponsiveContainer>
      <p id="caption">{description}</p>
    </ChartWrapper>
  );
};

export default DonutChart;
