import type { APIResponse } from "../entities/metricsData";
import fakeApiData from './data.json'



const api = {
  getMetricsData:(): Promise<APIResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeApiData as APIResponse);
      }, 500);
    });
  }

}


export default api;
