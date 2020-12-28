envirobit.onClap(function () {
    envirobit.setLEDs(envirobit.OnOff.On)
    basic.clearScreen()
    basic.showString("°C")
    basic.showString("" + (envirobit.getTemperature()))
    basic.pause(500)
    basic.clearScreen()
    basic.showString("" + (envirobit.getHumidity()))
    basic.pause(500)
    envirobit.setLEDs(envirobit.OnOff.Off)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
