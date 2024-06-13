import "express-async-errors";
import helmet from "helmet";
import express, { urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import errorMiddleware from "./Middlewares/ErrorMiddleware";
import router from "./routes/envelope.route";

const app = express();

app.use(helmet());
app.use(cors());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/envelopes", router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../swagger.json")));

app.use(errorMiddleware);

export default app;
