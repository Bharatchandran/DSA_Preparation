// task is to remove all tabs and spaces from a string. This includes the character \t and " " from a string

function removeTAS(inputString){
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i]
        if(char !== " " && char !== "\t"){
            result += char
        }
    }
    return result
}

function recuresiveRTAS(inputString) {
    if(inputString.length === 0){
        return ""
    }
    const firstChar = inputString[0]
    const restOfString = inputString.slice(1) 
    if(firstChar === " " || firstChar === "\t") {
        return recuresiveRTAS(restOfString)
    } else {
        return firstChar + recuresiveRTAS(restOfString)
    }
}

console.log(recuresiveRTAS("Hello how are you"));

