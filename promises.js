var axios = require('axios');
var Promise = require('bluebird');

var target = 'http://localhost:3000/journals/Luca';
var target2 = 'http://localhost:3000/journals/Adam';

var lucaPromises = axios.delete(target)
    .then(() => axios.post(target, { action: "Prepare some slides" }))
    .then(() => axios.post(target, { action: "Repeat the slides" }))
    .then(() => axios.get(target))
    .then(response => {
        console.log("Luca:" + response.data);
        return response.data.length;
    })
    .catch(err => console.error('An error occurred'));


var adamPromises = axios.delete(target2)
    .then(() => axios.post(target2, {action: "Bug fix"}))
    .then(() => axios.post(target2, {action: "Get annoyed by Luca"}))
    .then(() => axios.get(target2))
    .then(response => {
        console.log("Adam:" + response.data);
        return response.data.length;
    });

// console.log(new Date());
// var lucaDelayedPromise = axios.get(target)
//         .then((response) => {
//             return new Promise((resolve, reject) => 
//                 setTimeout(resolve, 1000, response.data.length))
//         });

// var adamDelayedPromise = axios.get(target2)
//         .then((response) => {
//             return new Promise((resolve, reject) => 
//                 setTimeout(resolve, 5000, response.data.length))
//         });
// console.log(new Date())

// Promise.all([lucaDelayedPromise, adamDelayedPromise]).then(values => {
//     console.log(new Date());
//     console.log("Total number of actions: ", 
//         values.reduce((total, curr) => total+curr, 0));
// })
        