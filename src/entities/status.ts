import z from "zod";

export const StatusSchema = z.enum(['IDLE', 'LOADING', 'SUCCESS', 'ERROR']);
export type Status = z.infer<typeof StatusSchema>;
