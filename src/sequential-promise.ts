/*Problem:

Write a function runSequentially that:

    Takes an array of functions, where each function returns a promise.
    Runs these promises one after another (not in parallel).
    Returns a promise that resolves with an array of results in order.*/

async function runSequentially(arrayFns){
    return new Promise(async (resolve, reject)=>{
	try{
	    result = []; 
	    for (let i = 0; i < arrayFns.length; i++){
		let val = await arrayFns[i](); 
		result.push(val);
	    }
	    resolve(result);
	}catch(err){
	    reject(err); 
	}
    });
}

const task1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const task2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const task3 = () => new Promise(resolve => setTimeout(() => resolve(3), 300));

runSequentially([task1, task2, task3]).then(console.log);
