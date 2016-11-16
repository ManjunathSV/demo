let ArthService =  require('./arthservice');

class DivService extends ArthService{
	constructor(x,y){
		super(x,y);
	}	
	getResult(){
		return this.numOne%this.numTwo;
	}
}

module.exports = DivService;