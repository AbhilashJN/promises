let promise = require("./reject");

test("Should return error object", ()=>{

	return expect(promise).rejects.toEqual(expect.any(Error));
    
});

test("Should print REJECTED!", ()=>{

 	return expect(promise).rejects.toThrow(new Error("REJECTED!"));
    
});


test("Should not print asd", ()=>{

	return expect(promise).rejects.toThrow(new Error("asd")).not;
    
});


