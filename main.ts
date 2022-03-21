input.onButtonPressed(Button.A, function () {
    basic.showString(String2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    Sprite = game.createSprite(1, 2)
})
let Sprite: game.LedSprite = null
let String2 = ""
let Number2 = 0
basic.showIcon(IconNames.Happy)
basic.showNumber(3.5)
basic.showString("Hello")
Number2 = 4
String2 = "No damsels?"
