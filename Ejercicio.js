let presupuesto= 14;
let hora= 16;
if (presupuesto >= 3 && hora > 12) {
    console.log("prepara una arepa");
} else {
    console.log("la arepa no se preparara");
}
if (presupuesto >= 7 && hora > 10) {
    console.log("compra una empanada");
} else {
    console.log("no se comprara una empanada");
}
if (presupuesto >= 12 || hora < 16) {
    console.log("compra una pizza");
} else {
    console.log("no se comprara una pizza");
}
if (presupuesto >= 12 && hora < 12) {
    console.log("compra una hamburguesa");
} else {
    console.log("no se comprara una hamburguesa");
}