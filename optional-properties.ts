type job = 'Engineer' | 'Doctor' // union type

interface Person {
    name: string,
    job?: string // optional properties
}

function generateEmail (input: Person): string{
    return `${input.name}@gmail.com`
}

generateEmail({
    name:'quang' // coz job is optional => job doesnt have to be declared but name have to
})