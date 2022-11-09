input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Estatura += 1
    basic.showString("E" + Estatura)
})
input.onButtonPressed(Button.A, function () {
    Peso += 1
    basic.showString("P" + Peso)
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * (Peso / (Estatura * Estatura))
    basic.showNumber(IMC)
    if (IMC < 18.5) {
        basic.showNumber(IMC)
        basic.showString("B P")
    } else if (IMC <= 25 && IMC >= 18.5) {
        basic.showNumber(IMC)
        basic.showString("P N")
    } else if (IMC > 25 && IMC < 30) {
        basic.showNumber(IMC)
        basic.showString("SP")
    } else {
        if (IMC > 30) {
            basic.showNumber(IMC)
            basic.showString("O")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Peso = Peso - 1
    if (true) {
        basic.showString("P" + Peso)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Estatura = Estatura - 1
    if (true) {
        basic.showString("E" + Estatura)
    }
})
let IMC = 0
let Peso = 0
let Estatura = 0
Estatura = 120
Peso = 30
IMC = 0
