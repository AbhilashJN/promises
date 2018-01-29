let promise = require("./ex4");


test("Should return string object", ()=>{

	return expect(promise).resolves.toEqual(expect.any(String));
    
});


test("should print I FIRED", ()=>{

	return expect(promise).resolves.toBe("I FIRED");
    
});

test("Should not throw I DID NOT FIRE", ()=>{

	return expect(promise).not.rejects;
    
});


