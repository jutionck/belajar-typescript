const fullName = 'Jution Candra Kirana';
const age = 25;
// console.log(fullName);
// console.log(age);
var JenisKelamin;
(function (JenisKelamin) {
    JenisKelamin["L"] = "Laki-laki";
    JenisKelamin["P"] = "Perempuan";
})(JenisKelamin || (JenisKelamin = {}));
console.log(JenisKelamin.L);
console.log(JenisKelamin.P);
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
let tuple = [11, 'Monday'];
console.log(tuple[0]);
console.log(tuple[1]);
