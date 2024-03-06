import { createWriteStream, existsSync, mkdirSync } from "fs";
import path from "path";

const logDir = path.join(__dirname, "../logs");

if (!existsSync(logDir)) {
  mkdirSync(logDir); 
}

// create a write stream (in append mode)
export const accessLogStream = createWriteStream(
  path.join(logDir, "../logs/access.log"),
  { flags: "a" }
);
