let promise = new Promise((fulfill,reject)=>{

	setTimeout(()=>{
		let err = new Error("REJECTED!");
		reject(err);

	},300);
    
});

promise.then(()=>{} , (value)=>{console.log(value.message);});
