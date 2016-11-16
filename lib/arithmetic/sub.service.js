let ArthService =  require('./arth.service');

class SubService extends ArthService{
	constructor(x,y){
		super(x,y);
	}	
	getResult(){
		return this.numOne-this.numTwo;
	}
}

module.exports = SubService;