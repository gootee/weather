import express from "express"
import mongoose from 'mongoose'
import environment from "../environment"
import cors from 'cors'
import morganMiddleware from "../config/morganMiddleware"
import { TestRoutes } from "../routes/test_routes"
import { CommonRoutes } from "../routes/common_routes"
import { UserRoutes } from "../routes/user_routes"
import { LoggerRoutes } from "../routes/logger_routes"

require('dotenv').config()

class App {
  public app: express.Application
  public mongoUrl: string = environment.getUrl()
  private test_routes: TestRoutes = new TestRoutes()
  private common_routes: CommonRoutes = new CommonRoutes()
  private user_routes: UserRoutes = new UserRoutes()
  private logger_routes: LoggerRoutes = new LoggerRoutes()

  constructor() {
    this.app = express()
    this.config()
    this.mongoSetup()
    this.test_routes.route(this.app)
    this.user_routes.route(this.app)
    this.logger_routes.route(this.app)

    //always last
    this.common_routes.route(this.app)
  }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(morganMiddleware)
    this.app.use(cors())
  }

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  }
}
export default new App().app