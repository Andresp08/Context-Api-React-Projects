
export function formatearDinero(valor){
    return valor.toLocaleString('es-CO',{
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
}