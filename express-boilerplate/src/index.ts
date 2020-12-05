import app from "./App";
import { env, checkForUndefinedEnvVariables } from "./config/envVariables";
import logger from "./logger";

(async () => {
  const serverPort: number = +env.SERVER_PORT;

  checkForUndefinedEnvVariables();
  logger.log("Env variables initialized", "StartUp");
  app.listen(serverPort, () =>
    logger.log(`Started on port {${serverPort}}`, "StartUp")
  );
})();
