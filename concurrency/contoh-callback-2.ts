const orderCoffee = (coffeName: string, callback) => {
  let coffee = null;
  console.log('Sedang membuat kopi, silakan tunggu...');
  setTimeout(() => {
    coffee = `Kopi ${coffeName} sudah jadi dibuat!!`;
    callback(coffee);
  }, 3000);
}

orderCoffee('Robusta', coffee => {
  console.log(coffee);
});


// Tambahan ada kopi nya