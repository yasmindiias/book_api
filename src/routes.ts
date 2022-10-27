import { Router } from "express";

const router = Router();

router.get("/books", (req, res) => {
  res.json({ data: [] });
});

export { router };
