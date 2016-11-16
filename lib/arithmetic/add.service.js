let ArthService =  require('./arth.service');

class AddService extends ArthService{
	constructor(x,y){
		super(x,y);
	}	
	getResult(){
		return this.numOne+this.numTwo;
	}
}

module.exports = AddService;