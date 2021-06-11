import orderCoffee from "./orderCoffe";

const pesanan = (coffeName: string) => new Promise((resolve, reject) => {
  orderCoffee(coffeName, reject, resolve);
});

async function pesananKopi(): Promise<void> {
  try {
    const latte = await pesanan('Latte');
    console.log(latte);
    const greenTea = await pesanan('Green Tea');
    console.log(greenTea);
    const thaiTea = await pesanan('Thai Tea');
    console.log(thaiTea);
    const roti = await pesanan('Roti');
    console.log(roti);
    //Gak ada di warung kopi
    const golok = await pesanan('Golok');
    console.log(golok);
  } catch (error) {
    console.error(error)
  }
}

pesananKopi();