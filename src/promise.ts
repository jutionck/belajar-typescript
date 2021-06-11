import orderCoffee from "./orderCoffe";

const pesanan = (coffeName: string) => new Promise((resolve, reject) => {
  orderCoffee(coffeName, reject, resolve);
});

pesanan('Robusta')
  .then((coffee) => {
    console.log(coffee);
  })
  .catch((error) => {
    console.error(error)
  })