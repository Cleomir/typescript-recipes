import env from "dotenv";

env.config();

export const ENVIRONMENT: string = process.env.NODE_ENV!;
