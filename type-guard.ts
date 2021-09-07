interface Person {
    name: string,
    job?: string 
}

function isPerson(potentialPerson: any): boolean{
    //Coz we dont know which type of potentialPerson we can use bellow method to check type Person
    if('name' in potentialPerson) return true
    return false
}