let promise = require("./reject");


test("Should print FULFILLED!", ()=>{

	return expect(promise).rejects.toThrow(new Error("REJECTED!"));
    
});
