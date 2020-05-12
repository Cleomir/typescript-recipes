import express, { Application, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "./Request";

const app: Application = express();

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  // Get auth header value
  const bearerHeader: string | undefined = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at space and get token from array
    const bearerToken: string = bearerHeader.split(" ")[1];
    // set the token
    req.token = bearerToken;
    // call next middleware
    next();
  } else {
    return res.status(401).end();
  }
};

app.post("/api/posts", verifyToken, (req: Request, res: Response) => {
  jwt.verify(req.token, "secretkey", undefined, (err, authData) => {
    if (err) return res.sendStatus(401).end();

    return res.status(201).json({
      message: "Post created.",
      authData,
    });
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "john doe",
    email: "johndoe@example.com",
  };

  // sign token
  jwt.sign(user, "secretkey", { expiresIn: "1h" }, (err, token) => {
    if (err) return res.status(500).end();

    return res.json({
      token,
    });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
