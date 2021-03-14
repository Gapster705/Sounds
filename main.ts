basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (input.buttonIsPressed(Button.B)) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
