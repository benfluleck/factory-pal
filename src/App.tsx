import Loader from "./components/Loader/Loader";
import { StatusSchema } from "./entities/status";
import Container from "./layout/Container/Container";
import Dashboard from "./features/dashboard/Dashboard";
import useDashboardMetrics from "./hooks/useDashboardMetrics";


const App = () => {
  const {
    selectedMetricId,
    filteredItems,
    handleMetricSelect,
    handleRowClick,
    handleCategoryChange,
    selectedCategory,
    status,
    headers,
  } = useDashboardMetrics();

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
          handleMetricSelect={handleMetricSelect}
          handleRowClick={handleRowClick}
        />
      )}
    </Container>
  );
};

export default App;
