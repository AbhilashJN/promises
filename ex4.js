let promise = new Promise((fulfill,reject)=>{

	fulfill("I FIRED");
	reject(new Error("I DID NOT FIRE"));



});

promise.then((msg)=>{console.log(msg);} , (err)=>{console.log(err.message);});