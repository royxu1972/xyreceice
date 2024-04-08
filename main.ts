radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    y = receivedNumber % 1000
    yy = y - 90
    x = receivedNumber - y
    xx = x % (1000 - 90)
    motorbit.MotorRun(motorbit.Motors.M3, xx / 5)
    motorbit.MotorRun(motorbit.Motors.M4, yy / 5)
})
let xx = 0
let x = 0
let yy = 0
let y = 0
radio.setGroup(88)
basic.showIcon(IconNames.Square)
