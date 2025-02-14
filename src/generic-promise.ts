/*

If you want to make the promise generic, you can use a type parameter, T, which allows the type to be inferred or explicitly set.

*/

function fetchData<T>(url:string):Promise<T> {
    return new Promise((resolve, reject) => {
	setTimeout(() => {
	    resolve({} as T); 
	}, 1000);
    });
}

fetchData("localhost").then((val)=>{
    console.log(val);
})

