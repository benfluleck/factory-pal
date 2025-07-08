import { useEffect, useState } from "react";
import api from "../api/api";
import type { MetricsData } from "../entities/metricsData";
import { StatusSchema, type Status } from "../entities/status";

const useMetricsData = () => {
  const [metricsData, setMetricsData] = useState<MetricsData[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(StatusSchema.enum.IDLE);


  useEffect(() => {
    const fetchMetricsData = async () => {
      try {
        setStatus(StatusSchema.enum.LOADING);
        const response = await api.getMetricsData();
        const data = response.data; 
        setMetricsData(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch metrics data");
      } finally {
        setError(null);
        setStatus(StatusSchema.enum.SUCCESS);
      }
    };

    fetchMetricsData();
  }, [metricsData.length]);


  const headers = metricsData.length > 0 ? Object.keys(metricsData[0]) : [];

  return { metricsData, error, status, setStatus, headers, setMetricsData };
};

export default useMetricsData;
