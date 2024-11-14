import type { Express } from "express";
import chalk from "chalk";

const startServer = (app: Express, port: number): void => {
  app.listen(port, () => {
    console.log(chalk.green(`Server listening in port: ${port}`));
  });
};

export default startServer;
