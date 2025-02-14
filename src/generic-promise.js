/*

If you want to make the promise generic, you can use a type parameter, T, which allows the type to be inferred or explicitly set.

*/
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({});
        }, 1000);
    });
}
fetchData("localhost").then(function (val) {
    console.log(val);
});
