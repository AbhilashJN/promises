let promise = require("./async");


test("Should print PROMISE VALUE", ()=>{

	return expect(promise).resolves.toBe("PROMISE VALUE");
    
});
