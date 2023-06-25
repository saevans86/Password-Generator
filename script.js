const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement  = document.getElementById
('includeSymbols')
const includeUppercaseelement = document.getElementById
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES =arrayFromHighToLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES =arrayFromHighToLowToHigh(97, 122)
const NUMBER_CHAR_CODES =arrayFromHighToLowToHigh(48, 57)
const SYMBOL_CHAR_CODES =arrayFromHighToLowToHigh(33, 47).concat(
    arrayFromHighToLowToHigh(58, 64)
).concat(
    arrayFromHighToLowToHigh(91, 96)
).concat(
    arrayFromHighToLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', synchCharacterAmount)
characterAmountRange.addEventListener('input', synchCharacterAmount)

form.addEventListener('submit', e=> {
    e.preventDefault ()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword (characterAmount, includeUppercase, 
    includeNumbers, includeSymbols)
    passwordDisplay.innerText = password

})
function generatePassword(characterAmount, includeUppercase, includeNumbers, 
    includeSymbols) {
        let charCodes = LOWERCASE_CHAR_CODES
        if(includeUppercase) charCodes = charCodes.concat
        (LOWERCASE_CHAR_CODES)
        if(includeNumbers) charCodes = charCodes.concat
        (NUMBER_CHAR_CODES)
        if(includeSymbols) charCodes = charCodes.concat
        (SYMBOL_CHAR_CODES)

        const passwordCharacters = []
        for (let i = 0; i < characterAmount; i++) {
            const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] 
            passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return passwordCharacters.join('')    
    }

    function arrayFromHighToLowToHigh(low, high) {
    const array = []
    for (let i =low; i <= high; i++) {
    array.push(i)
    }
    return array
}



function synchCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

