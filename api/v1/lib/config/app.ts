import * as express from "express"
// import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose'
import environment from "../environment"
import { TestRoutes } from "../routes/test_routes"
import { CommonRoutes } from "../routes/common_routes"
import { UserRoutes } from "../routes/user_routes"

class App {
  public app: express.Application
  // public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName()
  public mongoUrl: string = environment.getUrl()
  private test_routes: TestRoutes = new TestRoutes()
  private common_routes: CommonRoutes = new CommonRoutes()
  private user_routes: UserRoutes = new UserRoutes()

  constructor() {
    this.app = express()
    this.config()
    this.mongoSetup()
    this.test_routes.route(this.app)
    this.user_routes.route(this.app)

    //always last
    this.common_routes.route(this.app)
  }

  // private getUrl(): string {
  //   return 'mongodb://localhost/' + environment.getDBName()
  // }

  private config(): void {
    // support application/json type post data
    this.app.use(express.json())
    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: false }))
   }

   private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  }
}
export default new App().app