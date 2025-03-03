import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


app.use(express.json({ limit: "16kb" }));
// Parses URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// It makes these files publicly accessible from a specified directory.
app.use(express.static("public"));





export { app };