import {Application, Request, Response } from 'express';

class TestRoutes {
  // public app: express.Application
  public route(app: Application) {
    app.get('/api/test', (req: Request, res: Response) => {
        res.status(200).json({message: "Get request successful"});
    });
    app.post('/api/test', (req: Request, res: Response) => {
        res.status(200).json({message:"Post request successful"});
    });
  }
}

// exports.TestRoutes = TestRoutes
export default new TestRoutes()
// exports.default = new TestRoutes()
// exports.default = new App().app;