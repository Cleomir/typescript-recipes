import { Request, Response } from "express";

/**
 *
 * @param req - Request object
 * @param res - Response object
 * @returns The response of the request
 */
const helloWorld = (req: Request, res: Response): Response => {
  return res.status(200).send("hello world");
};

export default helloWorld;
