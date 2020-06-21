import app from "./App";
import { env, checkForUndefinedEnvVariables } from "./config/envVariables";
import logger from "./helpers/logger";

(async () => {
  const serverPort: number = +env.SERVER_PORT;

  checkForUndefinedEnvVariables();
  logger.info("Initialized env variables");
  app.listen(env.SERVER_PORT, () =>
    logger.info(`Server is listening on port ${serverPort}`)
  );
})();
