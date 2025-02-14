/*
Write a function getUserName(userId) that:

    Fetches a user object with { id: userId, name: "Alice" } after 1 second.
    Extracts the name and returns it as a promise.
*/

function getUserName(userId:number){
    return new Promise((resolve, reject)=>{
	setTimeout(()=>{
	    const user = {id: userId, name: "Alice"};
	    resolve(user.name); 
	},1000);
    });
}


getUserName(1).then(console.log);

