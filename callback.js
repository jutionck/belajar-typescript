function greeter(message) {
  console.log(`${message}, how are you doing?`)
}

function sayHi(callback) {
  callback('Hi!')
}

sayHi(greeter)