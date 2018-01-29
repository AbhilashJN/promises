let promise = require("./reject");


test("Should print REJECTED!", ()=>{

	return expect(promise).rejects.toThrow(new Error("REJECTED!"));
    
});
