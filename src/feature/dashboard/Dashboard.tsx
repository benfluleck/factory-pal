import type { FC } from "react";
import CardList from "../../components/CardList/CardList";
import Select from "../../components/Select/Select";
import Table from "../../components/Table/Table";
import {
  categoryKeyEnum,
  type CategoryKey,
  type MetricsData,
} from "../../entities/metricsData";
import Section from "../../layout/Section/Section";
import DowntimeArticle from "../downtime/article/Article";
import EfficiencyArticle from "../efficiency/article/Article";
import ShiftArticle from "../shift/article/Article";

type DashboardProps = {
  metricsData: MetricsData[];
  selectedMetricId: string | null;
  selectedCategory: CategoryKey | "All";
  tableHeaders: string[];
  handleCategoryChange: (value: CategoryKey | "All") => void;
  handleCardListClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMetricSelect: (metricId: string | null) => void;
  handleRowClick: (event: React.MouseEvent<HTMLTableElement>) => void;
};

const Dashboard: FC<DashboardProps> = ({
  metricsData,
  selectedMetricId,
  selectedCategory,
  tableHeaders,
  handleCategoryChange,
  handleCardListClick,
  handleMetricSelect,
  handleRowClick,
}) => {

const showEfficiencyArticle =
    selectedCategory === "All" ||
    selectedCategory === categoryKeyEnum.enum.efficiency;

  const showDowntimeArticle =
    selectedCategory === "All" ||
    selectedCategory === categoryKeyEnum.enum.downtime;

  const showShiftArticle =
    selectedCategory === "All" ||
    selectedCategory === categoryKeyEnum.enum.shift;


  return (
    <>
      <header>
        <h1>Factory Metrics Dashboard</h1>
      </header>
      <Select
        selected={selectedCategory}
        title="Select Category"
        onChange={handleCategoryChange}
        options={["All", ...categoryKeyEnum.options]}
      />
      <CardList
        items={metricsData}
        onClick={handleCardListClick}
        selectedId={selectedMetricId}
        ariaLabel="Metrics Card List"
      />
      <Section title="ChartMetrics">
        {showEfficiencyArticle && (
          <EfficiencyArticle
            metricsData={metricsData}
            selectedMetricId={selectedMetricId}
            onMetricSelect={handleMetricSelect}
          />
        )}
        {showDowntimeArticle && (
          <DowntimeArticle
            metricsData={metricsData}
            selectedMetricId={selectedMetricId}
            onMetricSelect={handleMetricSelect}
          />
        )}
        {showShiftArticle && (
          <ShiftArticle
            metricsData={metricsData}
            onMetricSelect={handleMetricSelect}
            selectedMetricId={selectedMetricId}
          />
        )}
      </Section>
      <Section title="Metrics Table">
        <Table
          items={metricsData}
          selectedId={selectedMetricId}
          onClick={handleRowClick}
          title="Metrics Data"
          headers={tableHeaders}
          getKey={(item) => item.id}
          getHeader={(header) => <th key={header}>{header}</th>}
          getRow={(item) => (
            <>
              <td>{item.id}</td>
              <td>{item.label}</td>
              <td>{item.value}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
            </>
          )}
        />
      </Section>
    </>
  );
};


export default Dashboard;
