
//imports and declarations
let ServiceConfig = require('./config/services.config.js');
let Service = require('./lib/service.js');
let serviceList = ServiceConfig.services;
let arthService;


arthService = Service.get('arth');
arthService.displayMessage();