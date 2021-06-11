const janji = (waktu) => new Promise((resolve, reject) => {
  // Resolve, sebuah function/executer yang menerima 1 argumen / 1 parameter
  //Reject, sebuah function yang menerima 1 argumen / 1 paramter
  if (waktu === 0) {
    reject('Waktu tidak boleh 0');
  } else {
    resolve('Selamat Datang');
  }
});

// .then -> ketika proses yang berjalan sesuai
// .catch -> ketika proses yang berjalan tidak sesuai harapan maka blok catch ini akan
// di panggil
janji(0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error)
  });