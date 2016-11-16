let serviceConfig = require('../config/services.config.js');
class Service{
	
	static get(name){
		let tempService = Service.find(name);
		return tempService;
	}
	static init(){

	}
	static find(name){
		let serviceList = serviceConfig.services;
		let foundService;
		for( let service of serviceList){
			if(service.name == name){
				foundService = service;
			} 
		}
		let manDependencies = foundService.manDependencies;
		for(let dependency of manDependencies){

		}

		let tempPath = foundService.path;
		let TempService = require(tempPath);
		
		let temp = new TempService();
		return temp;
	}
}

module.exports = Service;
