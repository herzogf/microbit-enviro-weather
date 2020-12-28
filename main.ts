input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("" + envirobit.getTemperature() + " C")
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
})
envirobit.onClap(function () {
    if (envirobit.timeSinceLastClap() < 500) {
        basic.clearScreen()
        basic.showString("" + envirobit.getTemperature() + " C")
        basic.pause(500)
        basic.showString("" + envirobit.getHumidity() + " %")
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + envirobit.getHumidity() + " %")
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
})
envirobit.setClapSensitivity(80)
envirobit.setLEDs(envirobit.OnOff.Off)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
