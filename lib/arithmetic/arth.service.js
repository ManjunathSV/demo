let Service =  require('../service');

class ArthService{
	constructor(x,y){
		this.numOne = x;
		this.numTwo = y;
	}
	displayMessage(){
		console.log('I am ArithMetic Service');
	}
}
module.exports = ArthService;