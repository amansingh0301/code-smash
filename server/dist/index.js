"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
new application_1.App().start(process.env.PORT || '8080')
    .then(port => console.log(`server started on ${port}`))
    .catch(err => console.log(err));
