// concurrent promise calls
// when we make multiple promise calls and we want to check what happened to all of them
// and then decide whats going to be the next step
//user is authenticated and my product requires some details of user using userid created but authentication
//userid - from authentication (first)
//try making these calls parallely
//getUserProducts(userid)
//getUserAccountDetails(userid)
//getUserCartHistory(userid)
//authentication.then("To get resolve callback data").catch("To get reject callback data")
let getUserProducts = new Promise((resolve, reject)=>{ //getUserProducts - api call
    setTimeout(() => { // getUserProducts - api call
        resolve({
            "status" : 200,
            "msg" : "user products are fetched",
            "promise date" : (new Date).toDateString()
        })
    }, 5000);
})
let getUserAccountDetails = new Promise((resolve, reject )=>{ //getUserAccountDetails
    setTimeout(() => { // getUserAccountDetails - api call
        resolve({
            "status" : 200,
            "msg" : "user AccountDetails are fetched",
            "promise date" : (new Date).toDateString()
        })
    }, 10000);
})
let getusercart = new Promise((resolve, reject)=>{ //getusercart

    // setTimeout(() => { // getusercart - api call
    //     resolve({
    //         "status" : 200,
    //         "msg" : "user cart is fetched",
    //         "promise date" : (new Date).toDateString()
    //     })
    // }, 8000);
    setTimeout(() => { // getusercart - api call
        reject({
            "status" : 500,
            "msg" : "API Crashed!!",
            "promise date" : (new Date).toDateString()
        })
    }, 8000);
})
console.log("Promises are working... ")
// when we need all the promises to be settled we use this
// the case when even one promise fails all the promises gets rejected
Promise.all([
    getUserProducts,
    getUserAccountDetails,
    getusercart
]).then((data, error)=>{
    console.log("Promise All returns, when each one is settled / resolved ", data)
}).catch((data, error)=>{
    console.log("Promise All returns to catch, when any one is rejected ", data)
})
// Upon completion of each promises that we start, it returns the data for each promise individually
// Not all the promises gets rejected if one is reject. In fact we get data for each promise object
Promise.allSettled([
    getUserProducts,
    getUserAccountDetails,
    getusercart
]).then((data, error)=>{
    console.log("No need to stop exectution when on promise is failed.", data) // array of return data for each promise no matter resolved or rejected
})
console.log("Promises are all done!!! ")

//create promise of three concurrent sessions of a day and try to resolve and reject them
let session1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "Session 1 is completed",
            "promise date" : new Date().toDateString()
        })
    }, 5000);
})

let session2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            "status" : 200,
            "msg" : "Session 2 is completed",
            "promise date" : new Date().toDateString()
        })
    }, 10000);
})

let session3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject({
            "status" : 500,
            "msg" : "Session 3 is failed",
            "promise date" : new Date().toDateString()
        })
    }, 9000); // in this case second below 10000 or above 10000 ms produce different printing order.
    // Catch block is executed after two then blocks in below two promises
})

Promise.all(
    [session1, session2, session3]
).then((data)=>{
    console.log('You completed all sessions', data)
}).catch((data)=>{
    console.log('You failed some sessions', data)
})

Promise.allSettled(
    [session1, session2, session3]
).then((data)=>{
    console.log('You settle all sessions. Let\'s see the result:', data)
})

