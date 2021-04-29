// const promise = fetch('http');
// console.log(promise);

// promise.then(res =>{
//     console.log('res:', res);
//     const testPromise = res.text();
//     console.log('testPromise', testPromise);

//     testPromise.then(data => 
//         console.log('data', data));
// });

// const promise = fetch('./json.json');
// console.log(promise);

// promise.then(res =>{
//     console.log('res:', res);
//     const testPromise = res.json();
//     console.log('testPromise', testPromise);

//     testPromise.then(data => 
//         console.log('data', data));
// });

function callback(data){
    console.log('callback', data);
}