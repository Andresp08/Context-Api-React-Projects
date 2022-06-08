
//Marcas
export const MARCAS = [
    {id:1, nombre: 'Europeo'},
    {id:2, nombre: 'Americano'},
    {id:3, nombre: 'Asiatico'}
];


//Años
const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from( 
    new Array(20), 
    (valor, index) => YEARMAX - index 
)

//Planes
export const PLANES = [
    {id:1, nombre: 'Basico'},
    {id:2, nombre: 'Completo'}
];