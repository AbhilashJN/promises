let promise = require("./ex4");

test("I FIRED", ()=>{

	return expect(promise).resolves.toBe("I FIRED");
    
});

