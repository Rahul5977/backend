import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//data bahut jagah se aayega ..to uske liye best practices lgti hai
app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

export { app };
