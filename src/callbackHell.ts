import { isError } from "./errorFunction";
import orderCoffee from "./orderCoffe";

orderCoffee('Latte', isError, (kopi) => {
  console.log(kopi);
  orderCoffee('Gren Tea', isError, (kopi) => {
    console.log(kopi);
    orderCoffee('Thai Tea', isError, (kopi) => {
      console.log(kopi);
      orderCoffee('Roti', isError, (kopi) => {
        console.log(kopi);
      });
    })
  })
});