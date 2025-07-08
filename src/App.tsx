import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Select from "./components/Select/Select";
import Table from "./components/Table/Table";
import {
  categoryKeyEnum,
  type CategoryKey,
  type MetricsData,
} from "./entities/metricsData";
import { StatusSchema } from "./entities/status";
import useMetricsData from "./hooks/useMetricsData";
import { filterMetricsByCategory } from "./utils/utils";

function App() {
  const { metricsData, status, headers } = useMetricsData();
  const [category, setCategory] = useState<CategoryKey | "All">("All");
  const [items, setItems] = useState<MetricsData[]>([]);


  useEffect(() => {
    if (category === "All") {
      setItems(metricsData);
    }
  }, [metricsData, category]);

  const handleCategoryChange = (value: CategoryKey | 'All') => {
    setCategory(value);

    if (value === "All") {
      setCategory("All");
      setItems(metricsData);
    } else {
      setCategory(value);
      const filteredItems = filterMetricsByCategory(
        metricsData,
        value
      );
      setItems(filteredItems);
    }
  };

  return (
    <>
      {status === StatusSchema.enum.LOADING && <Loader />}
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
      <p>Feel free to modify it as you like!</p>
      <p>Enjoy coding!</p>

      <Select
        selected={category}
        onChange={handleCategoryChange}
        options={categoryKeyEnum.options}
      />
      <Table
        items={items}
        headers={headers}
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
    </>
  );
}

export default App;
