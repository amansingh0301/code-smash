import { App } from "./application";
import { appConfig } from "./configs";

new App().start(appConfig.getPort())
.then(port => console.log(`server started on ${port}`))
.catch(err => console.log(err));