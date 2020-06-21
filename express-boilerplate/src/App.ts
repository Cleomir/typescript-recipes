import express, { Application, Request, Response } from "express";
import helmet from "helmet";

import index from "./routes";
import requestLogger from "./middleware/requestLogger";

/**
 * Express instance
 */
const app: Application = express();
// global middleware
app.use(express.json());
app.use(helmet());
app.use(requestLogger());

// mount root routes
app.use("/", index);
// 404 handler
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: "Page not Found",
  });
});

export default app;
