let promise = require("./fulfill");


test("Should print FULFILLED!", ()=>{

	return expect(promise).resolves.toBe("FULFILLED!");
    
});