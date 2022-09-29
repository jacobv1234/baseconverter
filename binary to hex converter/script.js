const InputTextBox = document.querySelector('.InputField')
const InputBaseSelector = document.querySelector('.InputBase')
const OutputTextBox = document.querySelector('.OutputText')
const OutputBaseSelector = document.querySelector('.OutputBase')

function BinToDec(bin) {
    let decimal = 0
    let bitValue = 1
    for (let i = bin.length - 1; i >= 0; i--) {
        let character = bin[i]
        if (character == '1') {
            decimal += bitValue
        }
        bitValue *= 2
    }
    return decimal
}

function OctToDec(bin) {
    let decimal = 0
    let bitValue = 1
    for (let i = bin.length - 1; i >= 0; i--) {
        let character = bin[i]
        decimal += (parseInt(character) * bitValue)
        bitValue *= 8
    }
    return decimal
}

function HexToDec(bin) {
    let decimal = 0
    let bitValue = 1
    for (let i = bin.length - 1; i >= 0; i--) {
        let character = bin[i]
        decimal += (parseInt(character,16) * bitValue)
        bitValue *= 16
    }
    return decimal
}

function DecToBin(dec) {
    return parseInt(dec,2).toString()
}

function DecToOct(dec) {
    return parseInt(dec,8).toString()
}

function DecToHex(dec) {
    return parseInt(dec,16).toString()
}


function Conversion() {
    let Input = InputTextBox.value
    let BaseFrom = parseInt(InputBaseSelector.value)
    let BaseTo = parseInt(OutputBaseSelector.value)
    console.log(BaseFrom)
    console.log(BaseTo)

    console.log(OutputTextBox)

    let halfway = 0
    switch (BaseFrom) {
        case 2:
            halfway = BinToDec(Input)
            break
        case 8:
            halfway = OctToDec(Input)
            break
        case 16:
            halfway = HexToDec(Input)
            break
        default:
            console.log('Converting from decimal')
            halfway = Input
    }

    console.log(halfway)

    switch (BaseTo) {
        case 2:
            OutputTextBox.innerHTML = DecToBin(halfway)
            break
        case 8:
            OutputTextBox.innerHTML = OctToDec(halfway)
            break
        case 16:
            OutputTextBox.innerHTML = HexToDec(halfway)
            break
        default:
            OutputTextBox.innerHTML = halfway
            console.log('Converting to decimal')
    }
}

InputTextBox.addEventListener('keyup', () => {
    Conversion()
})

