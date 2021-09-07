const a = 'hello'
const b = 5

console.log(a)

const c: string[] = []
c.push(a)
c.push(b as any)

console.log(c)