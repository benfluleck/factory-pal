import type { FC } from "react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { ChartWrapper } from "../../../layout/Chart/wrapper";
import type { MetricBarChartData } from "../../../entities/chart";
import { useTheme } from "styled-components";

type BarChartProps = {
  data: MetricBarChartData[];
  description?: string;
  selectedMetricId: string | null;
  onMetricSelect: (metricId: string | null) => void;
};

const BarChart: FC<BarChartProps> = ({
  data,
  description,
  selectedMetricId,
  onMetricSelect,
}) => {

  const { colors } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBarClick = (data: any) => {
    if (data && data.payload) {
      const metricId = data.payload.id;
      onMetricSelect(selectedMetricId === metricId ? null : metricId);
    }
  };

  return (
    <ChartWrapper aria-labelledby="caption" data-testid="bar-chart">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={400}
        minWidth={400}
      >
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={70}
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(_value: number, _name: string, props: any) => [
              props.payload.originalValue,
            ]}
            labelFormatter={(label) => label}
          />
          <Bar
            dataKey="value"
            fill={colors.percentage}
            onClick={handleBarClick}
            fillOpacity={0.7}
            stroke={colors.percentage}
            strokeWidth={selectedMetricId ? 1 : 0}
            animationDuration={1000}
          ></Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
      <p id="caption">{description}</p>
    </ChartWrapper>
  );
};

export default BarChart;
