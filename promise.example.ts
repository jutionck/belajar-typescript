const randomAboveFive = () =>
    new Promise<boolean | string>((resolve, reject) => {
      const random = Math.floor(Math.random() * 15);
    if (random > 5) {
      resolve(true);
      return;
    }
    reject("It was lower than 5");
});
const checkRandomNumber = async (): Promise<boolean | string> => {
    let result;
    try {
      result = await randomAboveFive();
    } catch (err) {
      console.log("ERROR -- ", err);
      result = err;
    }
    console.log("----->>>", result);
    return result;
};
checkRandomNumber();