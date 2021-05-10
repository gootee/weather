import { Application, Request, Response } from 'express'
import Logger from "../config/logger"
// import morganMiddleware from "../config/morganMiddleware"

export class LoggerRoutes {

  public route(app: Application) {
    // app.use(morganMiddleware)

    app.get("/api/logger", (_, res: Response) => {
      Logger.error("This is an error log")
      Logger.warn("This is a warn log")
      Logger.info("This is an info log")
      Logger.http("This is an http log")
      Logger.debug("This is a debug log")
    
      res.send("Hello world")
    })
  }
}