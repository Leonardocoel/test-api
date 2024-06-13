import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running server on port: ${PORT}`);
});
