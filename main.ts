namespace SpriteKind {
    export const Lås = SpriteKind.create()
    export const Nøgle = SpriteKind.create()
    export const GUN = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
function Boss2 () {
    myBoss = sprites.create(img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `, SpriteKind.Boss)
    myBoss.setScale(3, ScaleAnchor.Middle)
    tiles.placeOnTile(myBoss, tiles.getTileLocation(8, 7))
    BossAlive = true
    statusbar = statusbars.create(50, 10, StatusBarKind.Health)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setOffsetPadding(0, 10)
    statusbar.setColor(2, 10, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    skydmod = 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (skydmod == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ridder, 120, 0)
    } else if (skydmod == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ridder, -120, 0)
    } else if (skydmod == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . 3 3 1 1 1 1 1 3 3 . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . 2 2 1 1 1 1 1 2 2 . . . . 
            . . 3 3 2 3 3 1 3 3 2 3 3 . . . 
            . 3 3 . . 2 3 1 3 2 . . 3 3 . . 
            . 1 . . . 2 3 1 3 2 . . . 1 . . 
            . 1 3 . . . 3 1 3 . . . 3 1 . . 
            . . 1 1 3 3 3 3 3 3 3 1 1 . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ridder, 0, -120)
    } else if (skydmod == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            `, Ridder, 0, 120)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbar.value += -0.5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    skydmod = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    Kode = game.askForNumber("Hvad er koden?", 4)
    if (Kode == 3846) {
        game.gameOver(true)
    }
})
function nyt_Level (Level_nr: number) {
    if (Level_nr == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (Level_nr == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (Level_nr == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        Boss2()
        tiles.setCurrentTilemap(tilemap`level8`)
    }
    tiles.placeOnRandomTile(Ridder, sprites.dungeon.stairWest)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(myBoss, effects.fire, 500)
    sprites.destroy(statusbar)
    BossAlive = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    skydmod = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    skydmod = 4
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.showLongText("Koden er 3846 ", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    Nuværende_level += 1
    nyt_Level(Nuværende_level)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Ghost: Sprite = null
let Kode = 0
let projectile: Sprite = null
let skydmod = 0
let statusbar: StatusBarSprite = null
let BossAlive = false
let myBoss: Sprite = null
let Ridder: Sprite = null
let Nuværende_level = 0
if (game.ask("Få Kap til at dræbe bossen", "og find nøglen til kisten")) {
    Nuværende_level = 1
    nyt_Level(1)
    Ridder = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . 6 f f f c c c c c f f c . . 
        . f f c e b b d b b b c c c . 
        . f c d d d 1 1 d d d d e c . 
        . c b d d d 1 d d d d d b c c 
        . c b d d d 1 d d d d d d e . 
        . b d d d d d d d d b e e b . 
        . b d b b e e b d e c c e b . 
        . b d d d b d d d b d d d b . 
        . b d d d d d d d d b d d b . 
        . b b d d d d b b e c b b e . 
        . e e d d b e e e e c c e e . 
        . c c b b b b d b b b b e c . 
        . d e c e e b d b b b e c . . 
        . . d e f f c c e e c f . . f 
        . . . . . . . . . . . . . f f 
        `, SpriteKind.Player)
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setLife(1)
    tiles.placeOnRandomTile(Ridder, sprites.dungeon.stairWest)
    controller.moveSprite(Ridder)
    scene.cameraFollowSprite(Ridder)
    controller.moveSprite(Ridder, 100, 100)
    if (info.life() == 0) {
        game.gameOver(false)
    } else {
        Ridder.startEffect(effects.hearts, 500)
    }
}
music.play(music.createSong(hex`0078000408030205001c000f0a006400f4010a00000400000000000000000000000000000000027c000000040002272a08000c0002252a10001400012218001c000225271c002000012a24002800012728002c0001242c003000012930003400012a3400380002252738003c00011d3c004000012040004400012444004800012748004c00012a4c005000012750005400012254005800011d58005c00011d5c006000011d07001c00020a006400f4016400000400000000000000000000000000000000037c000000040002272a08000c0002252a10001400012218001c000225271c002000012a24002800012728002c0001242c003000012930003400012a3400380002252738003c00011d3c004000012040004400012444004800012748004c00012a4c005000012750005400012254005800011d58005c00011d5c006000011d`), music.PlaybackMode.UntilDone)
game.onUpdate(function () {
    if (BossAlive) {
        if (Ridder.x + 30 < myBoss.x) {
            myBoss.vx = -20
            myBoss.setImage(img`
                ........................
                ..........cc............
                .........ccc............
                .....ccccccc.ccc........
                ...cc555555ccccc........
                ..c5555555555bcc........
                .c55551ff55555b.ccc.....
                c55555ff5555555bccc.....
                c55d555555555555bc......
                c55555bb555555555b.c....
                .cbb31b5555ddd555bcc....
                .c5333b555ddddd55dcc....
                .c533b55ddddddd5ddc.....
                ..c555dbbb555bddddb.c...
                ...cccb55555bbdddddcc...
                ....ccb555ccdddddddcc...
                ..ccccbcccbddddddddcc...
                ..c55cbbbbd55dddddddbcc.
                ...c5ccbbd555dddddddddcc
                ....cccbb555ddbbbddddddc
                ......ccb55ddbbbbddddcc.
                ....ccddcbdddbbbbbccc...
                ....ccccd555ddccccc.....
                ........cccccc..........
                `)
        } else if (Ridder.x + 30 < myBoss.x) {
            myBoss.vx = 20
            myBoss.setImage(img`
                ........................
                ............cc..........
                ............ccc.........
                ........ccc.ccccccc.....
                ........ccccc555555cc...
                ........ccb5555555555c..
                .....ccc.b55555ff15555c.
                .....cccb5555555ff55555c
                ......cb555555555555d55c
                ....c.b555555555bb55555c
                ....ccb555ddd5555b13bbc.
                ....ccd55ddddd555b3335c.
                .....cdd5ddddddd55b335c.
                ...c.bddddb555bbbd555c..
                ...ccdddddbb55555bccc...
                ...ccdddddddcc555bcc....
                ...ccddddddddbcccbcccc..
                .ccbddddddd55dbbbbc55c..
                ccddddddddd555dbbcc5c...
                cddddddbbbdd555bbccc....
                .ccddddbbbbdd55bcc......
                ...cccbbbbbdddbcddcc....
                .....cccccdd555dcccc....
                ..........cccccc........
                `)
        } else {
            myBoss.vx = 0
        }
    }
})
game.onUpdateInterval(1000, function () {
    Ghost = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 1 1 1 f f . . . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f b d b f d d f b d b f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f b 1 1 1 1 1 1 b f . . . 
        . . f f f c d b 1 b d f f f f . 
        f c 1 1 1 c b f b f c 1 1 1 c f 
        f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
        f b f b f f f f f f b f b f b f 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Ghost, sprites.dungeon.doorLockedNorth)
    Ghost.follow(Ridder, 50)
})
forever(function () {
    info.setScore(game.runtime())
})
