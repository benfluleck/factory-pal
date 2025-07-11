import { z } from "zod";

export const categoryKeyEnum = z.enum(["efficiency", "shift", "downtime"]);

export const metricTypesEnum = z.enum([
  "percentage",
  "number",
  "secs",
  "hours",
]);

export const MetricsSchemaData = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number(),
  description: z.string(),
  type: metricTypesEnum,
  category: categoryKeyEnum,
});

export const APISchemaResponse = z.object({
  data: z.array(MetricsSchemaData),
});

export type CategoryKey = z.infer<typeof categoryKeyEnum>;

export type MetricTypes = z.infer<typeof metricTypesEnum>;

export type MetricsData = z.infer<typeof MetricsSchemaData>;

export type APIResponse = z.infer<typeof APISchemaResponse>;
