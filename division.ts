export default function divide(a:number, b:number):number|string {
  return b === 0 ? "No se puede dividir por cero" : a / b
}
