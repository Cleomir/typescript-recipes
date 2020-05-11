import express, { Application, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "./Request";

const app: Application = express();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
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
    res.send(403);
  }
};

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req: Request, res: Response) => {
  jwt.verify(req.token, "secretkey", undefined, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created.",
        authData,
      });
    }
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
    res.json({
      token,
    });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
