//promise learning

const myPromise = new Promise((resolved, rejected) => {
    const user = { name: "Srayo" };
    if (!user) {
        rejected("Something is wrong!");
    }
    else {
        setTimeout(() => {
            resolved("Successfully got data");
        }, 1000)
    }
});

myPromise.then(res => console.log("Found in data:", res))
    .catch(err => console.log("Found in data:", err));

console.log("Done");

const userData = [1, 2, 3, 4, 5];
let getData = [];
for (i = 0; i < userData.length; i++) {
    const users = userData[i];
    //wrong
    // myPromise.then(res => getData.push(res));
    getData.push(myPromise);
}

Promise.all(getData).then(res => {
    console.log(res);
})

console.log(getData);