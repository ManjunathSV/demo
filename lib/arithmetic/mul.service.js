let ArthService =  require('./arth.service');

class MulService extends ArthService{
	constructor(x,y){
		super(x,y);
	}	
	getResult(){
		return this.numOne*this.numTwo;
	}
}

module.exports = MulService;