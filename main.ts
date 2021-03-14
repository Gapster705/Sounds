basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
