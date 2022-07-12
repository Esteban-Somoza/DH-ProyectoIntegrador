let name = "name"
let apellido = "apellido"
let edad = "edad"

let prod = {
    [name]: "juan",
    [apellido]: "lopez",
    [edad]: 4
}

// console.log(prod{1})


let informacion = ["Apto",
    "Color",
    'Diseño',
    'Línea',
    'Presentación',
    'Tecnología',
    'Tipo',
    'Estilos']

let info = ['Apto termotanque y calefón',
    'Cromo, Rose gold',
    'Volante Cruz',
    '',
    'Cierre suave',
    'Cierre cerámico',
    'Tradicional',
    'Industrial, minimalista, moderno',]

for (let i = 0; i < info.length; i++) {
    if (info[i].length != 0) {
        console.log(informacion[i] + ":" + info[i]);
    }
}



let inf = Object.getOwnPropertyNames(prod);
console.log(inf)

let str ="stringify"

str.includea("9")
console.log(str)