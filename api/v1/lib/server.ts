import app from "./config/app.js";
import env from "./environment.js"

const PORT = env.getPort()

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
})
