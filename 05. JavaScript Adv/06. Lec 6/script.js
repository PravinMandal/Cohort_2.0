// //promise
// let prm = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10);
//         if(rn >= 5) {
//             resolve(rn);
//         } else {
//             reject(rn);
//         }
//     }, 2000);
// })

// prm.then(function(val) {
//     console.log("resolved with: ", val);
// })
// .catch(function(val) {
//     console.log("rejected with: ", val);
// })


// //Fetch
// fetch(`https://randomuser.me/api`)
// .then((rawdata) => rawdata.json())
// .then((data) => {
//     console.log(data.results[0].name.first);
// })
// .catch(function(err) {
//     console.log(err, "Bro failed to fetch")
// })


// async await

function getNum() {
    return new Promise((resolve, reject) => {
                    let num = Math.floor(Math.random() * 10);
                    if(num >= 5) {
                        resolve(num);
                    } else reject(num);
               })
}

async function abcd() {
    let num = await getNum();
    console.log(num);
}

abcd();