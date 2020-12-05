import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import logger from "../logger";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      id: string;
    }
  }
}

/**
 * Logs request properties and assigns a request id
 */
const requestLogger = () => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // check if request has an id or create one
    const requestId: string | undefined = req.get("X-Request-ID");
    req.id = requestId ? requestId : uuidv4();

    // log request data
    const { protocol, headers, method, body, originalUrl, connection } = req;
    logger.log(
      `IP: ${
        connection.remoteAddress
      } request URL: ${method} ${protocol}://${req.get("host")}${originalUrl}`,
      "Request",
      req.id
    );
    logger.log("Request headers:", "Request", req.id, headers);
    logger.log("Request body:", "Request", req.id, body);

    next();
  };
};

export default requestLogger;
