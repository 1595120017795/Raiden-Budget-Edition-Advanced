function On_Start () {
    textSprite = textsprite.create("Raiden Budget Edition", 0, 5)
    textSprite.setPosition(78, 19)
    textSprite.setOutline(1, 2)
    timer.after(500, function () {
        textSprite2 = textsprite.create("ADVANCED", 0, 5)
        textSprite2.setPosition(78, 28)
        textSprite2.setOutline(1, 2)
    })
    timer.after(1500, function () {
        textSprite3 = textsprite.create("V.1.0")
        textSprite3.setPosition(76, 35)
        textSprite3.setOutline(1, 2)
    })
    timer.after(1500, function () {
        textSprite4 = textsprite.create("By Fire Flame Coding")
        textSprite4.setPosition(78, 43)
        textSprite4.setOutline(1, 2)
        blockMenu.showMenu([
        "Play",
        "Options",
        "Credits"
        ], MenuStyle.Grid, MenuLocation.BottomHalf)
    })
}
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
On_Start()
