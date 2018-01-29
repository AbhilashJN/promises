let promise = require("./fulfill");


test("Should print FULFILLED!", ()=>{

 	return expect(promise).resolves.toBe("FULFILLED!");
    
});

test("Should not print asd", ()=>{

	return expect(promise).resolves.not.toBe("asd!");
    
});


test("Should return string type", ()=>{

	return expect(promise).resolves.toEqual(expect.any(String));
    
});
