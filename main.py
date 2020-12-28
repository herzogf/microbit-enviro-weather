def on_button_pressed_a():
    envirobit.set_le_ds(envirobit.OnOff.ON)
    basic.clear_screen()
    basic.show_string(str((envirobit.get_temperature())) + " C")
    basic.pause(500)
    basic.clear_screen()
    envirobit.set_le_ds(envirobit.OnOff.OFF)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    envirobit.set_le_ds(envirobit.OnOff.ON)
    basic.clear_screen()
    basic.clear_screen()
    basic.show_string(str((envirobit.get_humidity())) + " %")
    basic.pause(500)
    envirobit.set_le_ds(envirobit.OnOff.OFF)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)

def on_forever():
    pass
basic.forever(on_forever)
