/*
Problem:
Write a function fetchAllData that:

    Accepts an array of numbers.
    Calls fetchData(n), which returns n * 2 after n * 100 ms.
    Uses Promise.all to resolve all results and return an array.
*/

function fetchData(n){
    return new Promise((resolve)=>{
	setTimeout(()=> resolve(n*2), n*1000); 
    });
}

function fetchAllData(numbers){
    return Promise.all(numbers.map(fetchData)); 
}

fetchAllData([1,2,3]).then(console.log); 


