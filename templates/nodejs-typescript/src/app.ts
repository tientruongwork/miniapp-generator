import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Application is running on port:${PORT}`);
});