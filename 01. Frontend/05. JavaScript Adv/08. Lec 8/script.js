//// Weather fetching through openweather api

// async function getweather(city) {
//     try {
//         let apikey = "b668071893bdd2671f84687c3229e51c";
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
//         console.log("getting you weather infooo...");
//         let raw = await fetch(url);
//         if(!raw.ok) {
//             //city name galat likha hai yaa koi bhi problem aayi jisse data nhi aa paaya
//             throw new Error("City not Found");
//         }

//         let realdata = await raw.json();
//         let citytemp = realdata.main.temp;
//         if(citytemp < 0) {
//             console.warn("Too cold out there ", citytemp, " deg");
//         } else if (citytemp > 40) {
//             console.warn("Too hot out there ", citytemp, "deg");
//         } else {
//             console.log(realdata);
//         }
//     } catch (err) {
//         console.error(err.message);
//     }
// }

// getweather("leh");



// Bulk Email sending simulation with parallel promises and Error Handling

function sendEmail(email) {
    return new Promise ((resolve, reject) => {
        let time = Math.floor(Math.random() * 3);

        setTimeout(()=> {
            let ran = Math.floor(Math.random() * 10);
            if(ran > 5) resolve("Email successfully sent.");
            else reject("Email not sent...");
        }, time*1000);
    })
}

async function sendEmails(users) {
    let allresponses = users.map((user) => {
        return sendEmail(user)
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        });
    });

    let ans = await Promise.all(allresponses);
    ans.forEach(element => {
        console.log(element);
    });
}
const users = [
    "bluefox27@example.com",
    "luna.marks91@mail.com",
    "fastorbit@inbox.net",
    "hello.tuesday@proton.me",
    "neonriver88@gmail.com",
    "oakfield.contact@yahoo.com",
    "pixelstorm@outlook.com",
    "amber.writes@icloud.com",
    "nightowl404@mail.com",
    "solarpath@fastmail.com"
];

sendEmails(users);


