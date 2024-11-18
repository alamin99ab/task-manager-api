import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import { 
  PORT, 
  DATABASE, 
  JWT_KEY, 
  JWT_EXPIRE_TIME, 
  EMAIL_HOST, 
  EMAIL_PORT, 
  EMAIL_SECURITY, 
  EMAIL_USER, 
  EMAIL_PASS, 
  EMAIL_UN_AUTH, 
  WEB_CACHE, 
  MAX_JSON_SIZE, 
  URL_ENCODE, 
  REQUEST_TIME, 
  REQUEST_NUMBER 
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());

const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

app.set("etag", WEB_CACHE);

mongoose.connect(DATABASE, { autoIndex: true }).then(() => {
  console.log("MongoDB connected");
}).catch(() => {
  console.log("MongoDB Disconnected");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
