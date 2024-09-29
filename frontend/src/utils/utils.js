export default function precioChileno (monto){
  return monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
}
