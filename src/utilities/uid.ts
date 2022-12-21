export const uid = () => {
  return `${new Date().getTime().toString()}-${Math.random()
    .toString(16)
    .slice(2)}`
}
