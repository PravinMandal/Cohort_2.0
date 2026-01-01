// //Question 1
// function afterDelay(time, cb) {
//     setTimeout(function(){
//         cb();
//     }, time);
// }

// afterDelay(2000, function(){
//     console.log("Callback Executed");
    
// })


// //Question 2
// function getUser(user, cb) {
//     setTimeout(function() {
//         let id = 123
//         cb({id: 123, username: user});
//     }, 1000)
// }

// function getUserPost(id, cb){
//     setTimeout(() => {
//         let userPost = ["post1", "post2", "post3"];
//         cb(userPost);
//     }, 1000);
// }

// getUser("Pravin", function(userDetails){    
//     getUserPost(userDetails.id, function(userPost){
//         console.log(userDetails.username);
//         userPost.forEach(function(val){
//             console.log(val);
//         })
//     });
// });


//Question 3
function userLogin(user, cb) {
    console.log("logging in User...")
    setTimeout(()=> {
        cb({userId : 1223, username: user});
    }, 1000)
}

function fetchPermission(userId, cb) {
    console.log("Fetching Permissions...")
    setTimeout(()=>{
        cb(["read", "write", "delete"]);
    }, 1000)
}

function loadDashboard(permissionId, cb) {
    setTimeout(()=>{
        cb();
    }, 1000)
}

userLogin("pravin", function(userData) {
    fetchPermission(userData.userId, function(permissionId) {
        loadDashboard(permissionId, function() {
            console.log("Dashboard Loaded");
        });
    });
});