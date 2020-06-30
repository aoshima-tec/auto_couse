function run (action: number) {
    switch (action) {
        case 1:
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
            break
        case 2:
            maqueen.motorStop(maqueen.Motors.All)
            break
        case 3:
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
            break
    }
}
maqueen.IR_callbackUser(function (message) {
    if (message == 4) {
        mode = 4
    } else {
        command[idx] = message
        time[idx] = input.runningTime()
        run(message)
        ++idx
    }
})
function program () {
    for (let i = 0; i < idx; i++) {
        run(command[i])
        if (i != (idx - 1)) {
            basic.pause(time[i + 1] - time[i] - 150)
        }
    }
    mode = 0
    idx = 0
}
let time: number[] = []
let command: number[] = []
let mode = 0
let speed = 50
let idx = 0
basic.forever(function () {
    switch (mode) {
    case 1:
        break
    case 2:
        break
    case 4:
        program()
        break
    }
})
