import app from "./config/app";
// import environment from "./environment";
import env from "./environment"
// const PORT = 3000;
const PORT = env.getPort()
app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
})
