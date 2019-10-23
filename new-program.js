//turn three LEDs on and off in sequence
led.enable(false)//turn off on board display
pins.digitalWritePin(DigitalPin.P6, 0)//set all LEDs to off
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P6, 1)//turn on first LED
    basic.pause(500)//pause for 1/2 second
    pins.digitalWritePin(DigitalPin.P8, 1)//turn on second LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P9, 1)//turn on third LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P9, 0)//turn off third LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)//turn off second LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P6, 0)//turn off first LED
    basic.pause(500)

})
