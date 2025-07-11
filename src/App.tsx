import { useState } from "react";
import Loader from "./components/Loader/Loader";
import { type CategoryKey } from "./entities/metricsData";
import { StatusSchema } from "./entities/status";
import useMetricsData from "./hooks/useMetricsData";
import { filterMetricsByCategory } from "./utils/utils";
import Container from "./layout/Container/Container";
import Dashboard from "./feature/dashboard/Dashboard";

const App = () => {
  const { metricsData, status, headers } = useMetricsData();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "All">(
    "All"
  );
  const [selectedMetricId, setSelectedMetricId] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? metricsData
      : filterMetricsByCategory(metricsData, selectedCategory);

  const handleCategoryChange = (value: CategoryKey | "All") => {
    setSelectedCategory(value);
    setSelectedMetricId(null);
  };

  const handleCardListClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const cardElement = target.closest("[data-index]");
    if (cardElement) {
      const index = cardElement.getAttribute("data-index");
      setSelectedMetricId(index);
    }
  };

  const handleRowClick = (event: React.MouseEvent<HTMLTableElement>) => {
    const target = event.target as HTMLElement;
    const rowElement = target.closest("tr");
    if (rowElement) {
      const id = rowElement.getAttribute("data-id");
      setSelectedMetricId(id);
    }
  };

  const handleMetricSelect = (metricId: string | null) => {
    setSelectedMetricId(metricId);
  };


  return (
    <Container data-testid="app" aria-label="FactoryPal Metrics Dashboard">
      {status == StatusSchema.enum.LOADING && <Loader />}
      {status === StatusSchema.enum.SUCCESS && (
        <Dashboard
          metricsData={filteredItems}
          selectedMetricId={selectedMetricId}
          selectedCategory={selectedCategory}
          tableHeaders={headers}
          handleCategoryChange={handleCategoryChange}
          handleCardListClick={handleCardListClick}
          handleMetricSelect={handleMetricSelect}
          handleRowClick={handleRowClick}
        />
      )}
    </Container>
  );
};

export default App;
