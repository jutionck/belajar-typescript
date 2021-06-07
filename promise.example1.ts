var promise = new Promise(function (resolve, reject) {
  // code goes here
});

function asyncAction() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async is done!');
    }, 1500);
  });
  return promise;
}

asyncAction().then(
  () => console.log("Resolved!")
);

const p = new Promise<boolean | string>((resolve, reject) => {
  const random = Math.random() * 10;
if (random > 5) {
    resolve(true);
    return;
  }
reject("It was lower than 5");
});
p.catch(err => console.log("ERROR - ", err));