import { App } from "./application";

new App().start(process.env.PORT || '8080')
.then(port => console.log(`server started on ${port}`))
.catch(err => console.log(err));