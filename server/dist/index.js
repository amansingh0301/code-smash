"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
const configs_1 = require("./configs");
new application_1.App().start(configs_1.appConfig.getPort())
    .then(port => console.log(`server started on ${port}`))
    .catch(err => console.log(err));
