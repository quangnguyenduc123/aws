function returnKeys<T extends object>(arg: T){
    console.log(Object.keys(arg))
    return arg
}
returnKeys({
    abc: 'def'
})