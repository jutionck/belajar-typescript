import { isError } from "./errorFunction";
import orderCoffee from "./orderCoffe";

const pesanan = (coffeName: string) => new Promise((resolve, reject) => {
  orderCoffee(coffeName, reject, resolve);
});

Promise.all([
  pesanan('Latte'),
  pesanan('Gren Tea'),
  pesanan('Thai Tea'),
  pesanan('Roti'),
  pesanan('Golok')
])
  .then((semuaPesanan) => {
    for (const pesanan of semuaPesanan) {
      console.log(pesanan);
    }
  })
  .catch((isError));

  // async await
