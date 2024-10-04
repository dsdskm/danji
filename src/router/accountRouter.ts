import express, { Express, Request, Response, Router } from "express";
const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => {
  console.log(`[Post] account`);
  res.send("[Post] account");
});

router.get("/", (req: Request, res: Response) => {
  console.log(`[Get] account`);
  res.send("[Get] account");
});

router.put("/", (req: Request, res: Response) => {
  console.log(`[Put] account`);
  res.send("[Put] account");
});

router.delete("/", (req: Request, res: Response) => {
  console.log(`[Delete] account`);
  res.send("[Delete] account");
});

module.exports = router;
