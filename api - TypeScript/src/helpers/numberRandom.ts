export function numberRandom(): number {
  const numero = Math.floor(Math.random() * 191) + 30
  return numero % 2 === 0 ? numero : numero - 1
}
