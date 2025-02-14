/*
Problem: Create a function fetchData that returns a promise which resolves to "Hello, World!" after 2 seconds.

Author: Chirath Nissanka
*/

function fetchData(){
    return new Promise((resolve, reject)=>{
	setTimeout(()=>{
	    resolve("Hello, world"); 
	}, 2000);
    });
}


fetchData().then(result=>{
    console.log("Promise result: " + result); 
});


