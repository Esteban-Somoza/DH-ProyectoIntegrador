let categories = {
    banio: ["ducha", "inodoro", "bidet", "griferia"],
    cocina: ["bacha", "horno", "griferia"],
    tanques: ["termotanques", "tanques de agua"],
    calefaccion: ["salamandra", "caloventores", "aires acondicionados"],
    instalaciones: ["tubos", "cintas", "adhesivos"]
}
function populate() {
    let s1 = document.getElementById("categoria");
    let s2 = document.getElementById("subCategoria");
    s2.innerHTML = "elegir una opcion";
    let optionArray = []
    if (s1.value == "banio") {
        optionArray = categories.banio
        console.log(optionArray)
    } else if (s1.value == "cocina") {
        optionArray = categories.cocina
    } else if (s1.value == "tanques") {
        optionArray = categories.tanques
    }
    else if (s1.value == "calefaccion") {
        optionArray = categories.calefaccion
    }
    else if (s1.value == "instalaciones") {
        optionArray = categories.instalaciones
    }
    for (let i = 0; i < optionArray.length; i++) {
        let newOption = document.createElement("option");
        if (i == 0 ) {
            newOption.value = "";
            newOption.innerHTML = "opciones";
            s2.options.add(newOption);
        }
        else {
            newOption.value = optionArray[i];
            newOption.innerHTML = optionArray[i];
            s2.options.add(newOption);
        }
    }
}