import express from "express";
import { Request, Response } from "express";

const API = express();

API.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "API is up",
    data: null,
  });
});

API.get("/erroring", (req: Request, res: Response) => {
  throw new Error("This is an error");
});

export const server = API.listen(8080, () => {
  console.log("server started on port 8080");
});

export default API;
