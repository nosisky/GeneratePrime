const myFormula = {
	//check if a input is prime
	checkPrime: function(num) {
		return !(Array(num + 1).join(1).match(/^1?$|^(11+?)\1+$/)); //Using Regexp
	}
};
const check = {
	getPrimes: function(num) {
		if(isNaN(num) || parseInt(num) < 0) {
			const msg = "Invalid input";
			return msg;
		}
		//check if num is an array
		if(Array.isArray(num)) {
			const msg = "Invalid input";
			return msg;
		}
		if(num < 1 || num > 100){
		  return 'Number must be between 1 and 100'
		}
		var result = [];
		//Generating an array of numbers from 1 to n
		const list = Array.from(new Array(num), (val,index)=>index + 1);

		//filter every element that is a prime number
		const primeNumbers = list.filter(function (lists) {
		  if(lists === 2) {
		    result.push(2);
		  }
		  if(lists === 3) {
		    result.push(3);
		  }
			if(lists > 3) {
				return myFormula.checkPrime(lists) === true;
			}
		});
		
		
		const finalResult = result.concat(primeNumbers);
		return finalResult;
	}
};
module.exports = check.getPrimes;