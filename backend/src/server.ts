import app from "@/app";
import dotenv from "dotenv";
import logger from "@/utils/logger";
dotenv.config();

const PORT = process.env.PORT || 8000;

// Initialize Application Insights
// appInsightsSetup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING || "");

app.listen(PORT, () => {
  logger.info(`App running at http://localhost:${PORT}`);
  logger.info(`Open API Specs is available at http://localhost:${PORT}/api/docs`);
});
